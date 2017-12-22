'use strict';

angular.module('confusionApp')
    .constant('baseURL', 'http://localhost:3000/')

    .service('menuFactory', ['$resource', 'baseURL', function($resource, baseURL) {

        this.getDishes = function() {

            var dishes = $resource(baseURL + 'dishes/:id', null, { update: { method: 'PUT' } });
            return dishes;

        };

        this.getPromotion = function() {

            var promotions = $resource(baseURL + 'promotions/:id', null, { get: { method: 'GET' } });
            return promotions;

        };
    }])

    .service('feedbackService', ['$resource', 'baseURL', function($resource, baseURL) {

        this.getFeedback = function() {

            var feedback = $resource(baseURL + 'feedback/:id', null, { save: { method: 'POST' } });
            return feedback;

        };

    }])

    .factory('corporateFactory', ['$resource', 'baseURL', function($resource, baseURL) {

        var corpfac = {};

        corpfac.getLeaders = function() {
            var leadership = $resource(baseURL + 'leadership/:id', null, { get: { method: 'GET' } });
            return leadership;
        };

        return corpfac;

    }])

;