function AppendValue(value) {
    document.getElementById('display').value += value;
}

function Reset() {
    document.getElementById('display').value = "";
}

function Backspace() {
    let display = document.getElementById('display');
    display.value = display.value.slice(0,-1);
}

function calculate() {
        let display = document.getElementById("display");
        let cal = display.value
        let result = "";
        
        if (cal.includes ('+')) {
            let parts = cal.split('+')
            result = parseFloat(parts[0]) + parseFloat(parts[1]);
        }
        if (cal.includes ('-')) {
            let parts = cal.split('-')
            result = parseFloat(parts[0]) - parseFloat(parts[1]);
        }
        if (cal.includes ('*')) {
            let parts = cal.split('*')
            result = parseFloat(parts[0]) * parseFloat(parts[1]);
        }

        if(cal.includes ('/')) {
            let parts = cal.split('/')
            result = parseFloat(parts[0]) / parseFloat(parts[1]);
        if (result = parts / ('0')) {
            return "Tak Terbatas"
        }
        }
    display.value = result;
 }
    

