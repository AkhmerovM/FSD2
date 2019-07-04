import $ from 'jquery';
import datepickerFactory from 'jquery-datepicker';
import 'air-datepicker/dist/js/datepicker.js';
import 'air-datepicker/dist/css/datepicker.min.css';
datepickerFactory($);

$(document).ready(function(){
    $('#datepicker').datepicker([{
        clearButton: true,
    }])
} );
