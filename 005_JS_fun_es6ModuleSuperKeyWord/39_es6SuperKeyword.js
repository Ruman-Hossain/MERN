class parent{
    hello1(){
        console.log("Hello From Parent Class Function Hello 1");
    }
    hello2(){
        console.log("Hello From Parent Class Function Hello 2");
    }
}
class child extends parent{
    welcome(){
        super.hello1();
        super.hello2();
    }
}

var obj = new child();
obj.welcome();