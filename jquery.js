$(document).ready(function()
{
    var result = 0;
    var prevEntry = 0;
    var operation = null;
    var currentEntry = '0';
    updateScreen(result);

    $("#clear").click(function()
	{
        location.reload();
        console.log("to verify");
    });

    $('.button').on('click', function(evt)
	{
        var buttonPressed = $(this).html();
        console.log(buttonPressed);
        
        if(buttonPressed === "C")
		{
            result = 0;
            currentEntry = '0';
        }
		else if(buttonPressed === "←")
		{
            currentEntry = currentEntry.substring(0, currentEntry.length-1);
        }
		else if(buttonPressed === '.')
		{
            currentEntry += '.';
        }
		else if(isNumber(buttonPressed))
		{
            if(currentEntry === '0') currentEntry = buttonPressed;
            else currentEntry = currentEntry + buttonPressed;
        }
		else if(isOperator(buttonPressed))
		{
            prevEntry = parseFloat(currentEntry);
            operation = buttonPressed;
            currentEntry = '';
        }
		else if(buttonPressed === '√')
		{
            currentEntry = Math.sqrt(currentEntry);
        }
		else if(buttonPressed === 'x²')
		{
            currentEntry = currentEntry * currentEntry;
        }
		else if(buttonPressed === '1/x')
		{
            currentEntry = 1 / currentEntry;
        }
		else if(buttonPressed === '=')
		{
            currentEntry = operate(prevEntry, currentEntry, operation);
            operation = null;
        }
        updateScreen(currentEntry);
    });
});

updateScreen = function(displayValue)
{
    var displayValue = displayValue.toString();
    $('.screen').html(displayValue.substring(0,10));
    $('.text').html(displayValue.substring(0,10));
};

isNumber = function(value)
{
    return !isNaN(value);
}

isOperator = function(value)
{
    return value === '/' || value === '*' || value === '+' || value === '-' || value === '%';
};

operate = function(a, b, operation, c)
{
    a = parseFloat(a);
    b = parseFloat(b);
    console.log(a, b, operation);
    if(operation === '+') { c = a + b; console.log(c); return c; }
    if(operation === '-') { c = a - b; console.log(c); return c; }
    if(operation === '*') { c = a * b; console.log(c); return c; }
    if(operation === '/') { c = a / b; console.log(c); return c; }
    if(operation === '%') { c = a % b; console.log(c); return c; }
}
