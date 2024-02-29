
export const myPlugin = {
    //install method 
    install(app, options) {
        //applications object referenced in the plugin as first Parameter.
        console.log(app)
        //add new api into application object so that, that will be available across the app 
        app.config.globalProperties.$uppercase = key => {
            return key.toUpperCase()
        }
    }
}