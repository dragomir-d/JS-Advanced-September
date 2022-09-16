function cookingByNumbers(inputNumber, ...commands){

    for (let i = 0; i < commands.length; i++){
        inputNumber = manipulator(inputNumber, commands[i])
    }

    function manipulator(num, command){
        switch(command) {
            case "chop":
                num /= 2;
                console.log(num);
                break;
            case "dice":
                num = Math.sqrt(num);
                console.log(num);
                break;
            case "spice":
                num += 1;
                console.log(num);
                break;
            case "bake":
                num *= 3;
                console.log(num);
                break;
            case "fillet":
                num *= 0.80;
                console.log(num);
                break;
        }
        return num;
    }
}