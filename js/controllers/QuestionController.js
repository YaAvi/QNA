'use strict';

qna.controller('QuestionController',
    function QuestionController($scope, questionData) {
        var questions = questionData.questions,
            half_length = Math.ceil(questions.length / 2);
        $scope.leftSide = questions.splice(0, half_length);
        $scope.rightSide = questions;
        console.log($scope.leftSide);
        console.log(questions);
    });