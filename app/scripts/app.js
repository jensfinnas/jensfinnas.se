'use strict';

/**
 * @ngdoc overview
 * @name jensfinnasseApp
 * @description
 * # jensfinnasseApp
 *
 * Main module of the application.
 */
angular
  .module('jensfinnasseApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'pascalprecht.translate'
  ])
  .config(function ($routeProvider, $translateProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });

    // Text template in English
    $translateProvider.translations('en', {
      'TITLE': 'Hello',
      'JOB-TITLE': "Data journalist",
      'READ-MORE': "Read more",
      'BACK-TO-TOP': "Back to top",
      'MEANING_TITLE': "I bring data <strong>meaning</strong>",
      'MEANING_TEXT': "<p>To understand society today you have to understand data. And to make society understandable you have to make data understandable.</p><p>That is my job. That is what I am good at. I am the journalist that liked math in school and learned to code. I became a data journalist.</p><p>Today I run <a href='http://jplusplus.se' target='_blank'>Journalism++ Stockholm</a>. We help newsrooms and communication agencies work with data with tools such as D3, R and Django.</p><p>But data journalism is not about tools and numbers. It is about finding the story behind the numbers.</p>",
      'COLLABORATE_TITLE': "Let's <strong>collaborate</strong>",
      'COLLABORATE_TEXT': 
        "<p>Do you work at a newsroom that wants to become better at working with data? Or on a communcation department with static pdf reports as your main output? Then you should consider contacting me.</p>"+
        "<p>I have worked with most of the leading media houses in Sweden and Finland – Aftonbladet, Sveriges Radio, Svenska Dagbladet, TV4, Helsingin Sanomat, Yle and Hufvudstadsbladet to mention a few.</p>"+
        "<p>Do also drop me an <a href=\"mailto:jens.finnas@gmail.com\">e-mail</a> or a <a href=\"http://twitter.com/jensfinnas/\" target=\"_blank\">tweet</a> if you are a data-minded developer, designer or statistician. I am always looking for new collaborators.</p>"
    });
    
    // Text template in Swedish
    $translateProvider.translations('sv', {
      'TITLE': 'Hej på dig!',
      'JOB-TITLE': "Datajournalist",
      'READ-MORE': "Läs mer",
      'BACK-TO-TOP': "Tillbaka till början av sidan",
      'MEANING_TITLE': "Jag gör data <strong>begriplig</strong>",
      'MEANING_TEXT': "<p>För att förstå samhället i dag så behöver man förstå data. Och för att göra samhället begripligt så måste man göra data begriplig.</p><p>Det här är mitt jobb och det jag är bra på. Jag är journalisten som gillade matte i skolan och som lärde sig koda. Jag blev en datajournalist.</p><p>I dag driver jag <a href='http://jplusplus.se' target='_blank'>Journalism++ Stockholm</a>. Vi hjälper redaktioner och kommunikatörer jobba med data. Vi verktygslådan finns redskap som D3, R och Django.</p><p>Men datajournalistik handlar inte bara om redskap och siffror. Datajournalistik handlar om att hitta berättelsen bakom Excelarket.</p>",
      'COLLABORATE_TITLE': "<strong>Jobba</strong> med mig",
      'COLLABORATE_TEXT': 
        "<p>Sitter du på en redaktion som vill bli bättre på att göra journalistik av data? Eller är du en kommunikatörer som tröttnat på att publicera statiska och tråkiga pdf-rapporter? I så fall ska du tycker jag att du ska ta kontakt med mig.</p>"+
        "<p>Jag har jobbat med de flesta av stora mediehusen i Sverige och Finland – Aftonbladet, Sveriges Radio, Svenska Dagbladet, TV4, Helsingin Sanomat, Yle, Hufvudstadsbladet med flera.</p>"+
        "<p><a href=\"mailto:jens.finnas@gmail.com\">Mejla</a> eller <a href=\"http://twitter.com/jensfinnas/\" target=\"_blank\">twittra</a> också gärna om du är datanördig kodare, designer eller statistiker. Jag söker alltid nya personer att samarbeta med.</p>"
    });
    
    // Set default language
    $translateProvider.preferredLanguage('en');

    $translateProvider.useSanitizeValueStrategy('sanitize');
  })
  .run(function($location, $rootScope) {
    $rootScope.$on('$viewContentLoaded', function() {

      $rootScope.$watch(function() { return $location.search(); }, function(search) {
        var scrollPos = 0;
        if (search.hasOwnProperty('scroll')) {
          var $target = $('#' + search.scroll);
          var padding = +$target.find(".section-header").css("padding-top").replace("px","");
          scrollPos = $target.offset().top ;
          $("body,html").animate({scrollTop: scrollPos}, "slow");                                                                                                                                                                    
       }
     });  
   });    
 });
