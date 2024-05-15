const form = document.forms.namedItem('signin')
const inputs = form.querySelectorAll('input')


inputs[0].oninput = (e) => {
    console.log(inputs[0].value);
}



form.onsubmit = (e) => {
    e.preventDefault();
    let error_counter = 0
    

    inputs.forEach(inp => {
        const parent = inp.parentElement
        if(inp.value.length === 0 && parent.classList.contains('req')) {
            parent.classList.add('error')
            error_counter++
        }
        form.reset()
    })
    

    if(error_counter > 0) {
        console.log(error_counter);
        return
    }
    submit(e)
}



function submit(e) {
    const user = {}
    const fm = new FormData(e.target)

    fm.forEach((val, key) => user[key] = val)


    console.log(user);
}

const picture = document.querySelector(".picture");
const inputFile = document.querySelector("#image");

inputFile.addEventListener("change", ({ target: t }) => {
     const [file] = t.files;

     if (!file) return;

     if (!file.size) return;

     const reader = new FileReader();

     reader.onload = () => {
          picture.src = reader.result;
     };

     reader.readAsDataURL(file);
});
let btn_send = document.querySelector("#send")


