
const filepaths = [
    'dynamicExternalFile'
]


export  class appTest {

    constructor() {
        console.log('this is the app test in the appFile');

        const path = `src/external/${filepaths[0]}`;
    
        import(path)
        .then((external) => {
            console.log('we have the file dynamically');
            external.test();
        })
    }


}

