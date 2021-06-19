//filter
$("#button-simple").click(function() {
    $(this).removeClass("btn-outline-primary").addClass("btn-primary");
    $(this).siblings().removeClass("btn-primary").addClass("btn-outline-primary");
    $(".scientific, .trigonometry, .hyperbolic, .arctrigonometry, .archyperbolic").fadeOut("fast");
});
$("#button-scientific").click(function() {
    $(this).removeClass("btn-outline-primary").addClass("btn-primary");
    $(this).siblings().removeClass("btn-primary").addClass("btn-outline-primary");
    $(".trigonometry, .hyperbolic, .arctrigonometry, .archyperbolic").fadeOut("fast");
    $(".scientific").fadeIn("fast");
});
$("#button-trigonometry").click(function() {
    $(this).removeClass("btn-outline-primary").addClass("btn-primary");
    $(this).siblings().removeClass("btn-primary").addClass("btn-outline-primary");
    $(".hyperbolic, .arctrigonometry, .archyperbolic").fadeOut("fast");
    $(".scientific, .trigonometry").fadeIn("fast");
});
$("#button-hyperbolic").click(function() {
    $(this).removeClass("btn-outline-primary").addClass("btn-primary");
    $(this).siblings().removeClass("btn-primary").addClass("btn-outline-primary");
    $(".trigonometry, .arctrigonometry, .archyperbolic").fadeOut("fast");
    $(".scientific, .hyperbolic").fadeIn("fast");
});
$("#button-arctrigonometry").click(function() {
    $(this).removeClass("btn-outline-primary").addClass("btn-primary");
    $(this).siblings().removeClass("btn-primary").addClass("btn-outline-primary");
    $(".trigonometry, .hyperbolic, .archyperbolic").fadeOut("fast");
    $(".scientific, .arctrigonometry").fadeIn("fast");
});
$("#button-archyperbolic").click(function() {
    $(this).removeClass("btn-outline-primary").addClass("btn-primary");
    $(this).siblings().removeClass("btn-primary").addClass("btn-outline-primary");
    $(".trigonometry, .hyperbolic, .arctrigonometry").fadeOut("fast");
    $(".scientific, .archyperbolic").fadeIn("fast");
});
//-------------------------

//global function
function get_monitor() {
    return $("#monitor").text();
}
function eval_monitor() {
    var text  = get_monitor();
    var text1 = [];
    var text2 = "";
    if (text.includes("/") == true) {
        text1 = text.split("^");
        text2 = Math.pow(text1[0],eval(text1[1]));
    }
    else if (text.includes("^") == true) {
        text1 = text.split("^");
        text2 = Math.pow(text1[0],text1[1]);
    }
    else {
        text2 = eval(text);
    }
    return text2;
}
function result_monitor(input) {
    $("#monitor").text(input);
}
//-------------------------

//operators
$("#clear").click(function() {
    result_monitor(0);
});
$("#delete").click(function() {
    var text = get_monitor();
    if (text.length > 1) {
        text = text.slice(0,-1);
        result_monitor(text);
    }
    else {
        result_monitor(0);
    }
});
$("#equal").click(function() {
    var text = eval_monitor();
    result_monitor(text);
});
$("#times").click(function() {
    var text = eval_monitor() + "*";
    result_monitor(text);
});
$("#division").click(function() {
    var text = eval_monitor() + "/";
    result_monitor(text);
});
$("#plus").click(function() {
    var text = eval_monitor() + "+";
    result_monitor(text);
});
$("#minus").click(function() {
    var text = eval_monitor() + "-";
    result_monitor(text);
});
$("#positive-negative").click(function() {
    var text = eval(eval_monitor() * -1);
    result_monitor(text);
});
$("#decimal").click(function() {
    var text = eval_monitor() + ".";
    result_monitor(text);
});
//-------------------------

//numbers
function numbers(input) {
    var text = "";
    if (get_monitor() == "0") {
        text = $(input).text();
    }
    else {
        text = get_monitor() + $(input).text();
    }
    result_monitor(text);
}
//-------------------------

//constants
$("#pi").click(function() {
    result_monitor(Math.PI);
});
$("#euler").click(function() {
    result_monitor(Math.E);
});
//-------------------------

//operations
$("#pi-power").click(function() {
    var text = Math.pow((Math.PI),(eval_monitor()));
    result_monitor(text);
});
$("#euler-power").click(function() {
    var text = Math.pow((Math.E),(eval_monitor()));
    result_monitor(text);
});
/*
$("#exp").click(function() {
    var text = x;
    result_monitor(text);
});
*/
$("#absolute").click(function() {
    var text = Math.abs(eval_monitor());
    result_monitor(text);
});
$("#arcx").click(function() {
    var text = 1 / (eval_monitor());
    result_monitor(text);
});
$("#factorial").click(function() {
    var text = eval_monitor();
    var text1 = text;
    for (var i = 1;i < text;i++) {
        text1 = text1 + "*" + i;
        console.log(text1);
    }
    var text2 = eval(text1);
    result_monitor(text2);;
});
$("#square").click(function() {
    var text = Math.pow((eval_monitor()), 2);
    result_monitor(text);
});
$("#cubic").click(function() {
    var text = Math.pow((eval_monitor()), 3);
    result_monitor(text);
});
$("#power").click(function() {
    var text = eval_monitor() + "^";
    result_monitor(text);
});
$("#power-2").click(function() {
    var text = Math.pow(2, (eval_monitor()));
    result_monitor(text);
});
$("#power-10").click(function() {
    var text = Math.pow(10, (eval_monitor()));
    result_monitor(text);
});
$("#root-2").click(function() {
    var text = Math.sqrt(eval_monitor());
    result_monitor(text);
});
$("#root-3").click(function() {
    var text = Math.pow((eval_monitor()), (eval(1/3)));
    result_monitor(text);
});
$("#root").click(function() {
    var text = eval_monitor() + "^1/";
    result_monitor(text);
});
$("#ln").click(function() {
    var text = Math.log(eval_monitor());
    result_monitor(text);
});
$("#log").click(function() {
    var text = Math.log10(eval_monitor());
    result_monitor(text);
});
function to_radian(input) {
    return input * (Math.PI / 180);
}
function to_degree(input) {
    return input * (180 / Math.PI);
}
$("#deg-to-rad").click(function() {
    var text = to_radian(eval_monitor());
    result_monitor(text);
});
$("#rad-to-deg").click(function() {
    var text = to_degree(eval_monitor());
    result_monitor(text);
});
//-------------------------

//trigonometry
$("#sin").click(function() {
    var text = Math.sin(to_radian(eval_monitor()));
    result_monitor(Number(text));
});
$("#cos").click(function() {
    var text = Math.cos(to_radian(eval_monitor()));
    result_monitor(Number(text));
});
$("#tan").click(function() {
    var text = Math.tan(to_radian(eval_monitor()));
    result_monitor(Number(text));
});
$("#sec").click(function() {
    var text = 1 / (Math.cos(to_radian(eval_monitor())));
    result_monitor(Number(text));
});
$("#csc").click(function() {
    var text = 1 / (Math.sin(to_radian(eval_monitor())));
    result_monitor(Number(text));
});
$("#cot").click(function() {
    var text = 1 / (Math.tan(to_radian(eval_monitor())));
    result_monitor(Number(text));
});
//-------------------------

//hyperbolic
$("#sinh").click(function() {
    var text = Math.sinh(eval_monitor());
    result_monitor(Number(text));
});
$("#cosh").click(function() {
    var text = Math.cosh(eval_monitor());
    result_monitor(Number(text));
});
$("#tanh").click(function() {
    var text = Math.tanh(eval_monitor());
    result_monitor(Number(text));
});
$("#sech").click(function() {
    var text = 1 / (Math.cosh(eval_monitor()));
    result_monitor(Number(text));
});
$("#csch").click(function() {
    var text = 1 / (Math.sinh(eval_monitor()));
    result_monitor(Number(text));
});
$("#coth").click(function() {
    var text = 1 / (Math.tanh(eval_monitor()));
    result_monitor(text);
});
//-------------------------

//arctrigonometry
$("#asin").click(function() {
    var text = to_degree(Math.asin(eval_monitor()));
    result_monitor(Number(text));
});
$("#acos").click(function() {
    var text = to_degree(Math.acos(eval_monitor()));
    result_monitor(Number(text));
});
$("#atan").click(function() {
    var text = to_degree(Math.atan(eval_monitor()));
    result_monitor(Number(text));
});
$("#asec").click(function() {
    var text = to_degree(Math.acos(1 / eval_monitor()));
    result_monitor(Number(text));
});
$("#acsc").click(function() {
    var text = to_degree(Math.asin(1 / eval_monitor()));
    result_monitor(Number(text));
});
$("#acot").click(function() {
    var text = to_degree(Math.atan(1 / eval_monitor()));
    result_monitor(Number(text));
});
//-------------------------

//archyperbolic
$("#asinh").click(function() {
    var text = Math.asinh(eval_monitor());
    result_monitor(Number(text));
});
$("#acosh").click(function() {
    var text = Math.acosh(eval_monitor());
    result_monitor(Number(text));
});
$("#atanh").click(function() {
    var text = Math.atanh(eval_monitor());
    result_monitor(Number(text));
});
$("#asech").click(function() {
    var text = Math.acosh(1 / eval_monitor());
    result_monitor(Number(text));
});
$("#acsch").click(function() {
    var text = Math.asinh(1 / eval_monitor());
    result_monitor(Number(text));
});
$("#acoth").click(function() {
    var text = Math.atanh(1 / eval_monitor());
    result_monitor(Number(text));
});
//-------------------------
