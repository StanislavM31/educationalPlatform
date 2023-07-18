import app from "./src/app";
const port:number = 3001
app.listen(port, ()=>{
    console.log(`Server run on port ${port}`);

})