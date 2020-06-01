import express from 'express';
const app = express();

//use type for non object
//function
type Fn = () => void;
type Add = (x: Parms) => number;

//use interface for object
interface Parms {
    a: number;
    b: number;
}

const add = (a: number, b: number):number => {
    //@ts-ignore: if undefined: use !, or if option
    return a + b;
}

app.get('/', (req: any) => {
    req.name = 'bob'
    console.log(req.name)
    add(1,2)
})
app.listen(3001, ()=>{
    console.log("started");
});
