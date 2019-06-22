// Javascript & jQuery

// show / hide backdrower

$(document).ready(function () {
  let dailyItem = $(".daily_item");
  let closeBackDrower = $("#close-backdrower");

  dailyItem.click(function () {
    $(".wa-backdrower").animate({
      right: 0
    });
  });

  closeBackDrower.click(function () {
    $(".wa-backdrower").animate({
      right: -300
    });
  });

  let settings = {
    id: 787657,
    apikey: '03a3f149451cd9db127313c477f966ee',
    units: 'metric'
  }

  let weatherWidget = {
    formatTime: function () {
      setInterval(function () {
        $('.left_info__current-time').text(moment().format('HH:mm'));
      }, 1000)
    },

    currentDate: new Date(),
    formatDate: moment().format("dddd, Do MMMM YYYY"),
    currentData: {},
    dailyData: [],
    fetchCurrentDate: function () {
      $.getJSON(`http://api.openweathermap.org/data/2.5/weather?id=${settings.id}&appid=${settings.apikey}&units=${settings.units}`)
        .done(function (data) {
          weatherWidget.currentData = data;
          weatherWidget.initCurrentData(data);
        }).catch(function (err) {
          console.log(err);
        });
    },

    fetchDailyData: function () {
      $.getJSON(`http://api.openweathermap.org/data/2.5/forecast?id=${settings.id}&appid=${settings.apikey}&units=${settings.units}`)
        .done(function (data) {

          weatherWidget.initDailyData(data);
        }).catch(function (err) {
          console.log(err);
        });
    },
    initDailyData: function (data) {
      this.currentDate.setHours(15);

      $.each(data.list, function (index, value) {
        let loopDate = new Date(value.dt_txt);
        if (weatherWidget.currentDate.getHours() === loopDate.getHours()) {
          weatherWidget.dailyData.push(value);
        }
      });


      $.each(weatherWidget.dailyData, function (index, singleDay) {
        let nameOfTheDay = moment(singleDay.dt_txt).format('dddd');
        $(`#${index + 1} .daily_item__title--name`).text(nameOfTheDay);
        $(`#${index + 1} .daily_item__icon i`).removeClass().addClass(weatherWidget.checkWeatherIcon(singleDay.weather[0].icon));
        $(`#${index + 1} .daily_item__value--temp span`).text(parseInt(singleDay.main.temp));
      });

      console.log(weatherWidget.dailyData);
    },

    initCurrentData: function (data) {

      $('.left_info__current-date').text(weatherWidget.formatDate);
      $('.right_info__city-title').text(data.name);
      $('.content__value--temp span').text(data.main.temp);
      $('#current-weather-icon').removeClass().addClass(weatherWidget.checkWeatherIcon(data.weather[0].icon));
    },
    checkWeatherIcon: function (name) {
      switch (name) {
        // ikonice za noc
        case '01n':
          return 'wi wi-night-clear';
          break;
        case '02n':
          return 'wi wi-night-alt-cloudy';
          break;
        case '03n':
          return 'wi wi-cloudy';
          break;
        case '04n':
          return 'wi wi-cloudy';
          break;
        case '09n':
          return 'wi wi-night-alt-showers';
          break;
        case '10n':
          return 'wi wi-night-alt-rain';
          break;
        case '11n':
          return 'wi wi-night-alt-thunderstorm';
          break;
        case '13n':
          return 'wi wi-night-snow-wind';
          break;
        case '50n':
          return 'wi wi-night-fog';
          break;
          // ikonice za dan 
        case '01d':
          return 'wi wi-day-sunny';
          break;
        case '02d':
          return 'wi wi-day-cloudy';
          break;
        case '03d':
          return 'wi wi wi-cloudy';
          break;
        case '04d':
          return 'wi wi wi-cloudy';
          break;
        case '09d':
          return 'wi wi-day-rain-mix';
          break;
        case '10d':
          return 'wi wi-day-hail';
          break;
        case '11d':
          return 'wi wi-day-sleet-storm';
          break;
        case '13d':
          return 'wi wi-day-snow';
          break;
        case '50d':
          return 'wi wi-day-fog';
          break;
        default:
          return 'wi wi-day-sunny';
      }
    }
  }
  weatherWidget.formatTime();
  weatherWidget.fetchCurrentDate();
  weatherWidget.fetchDailyData();

  console.log(weatherWidget.formatTime);
  console.log(weatherWidget.formatDate);




});