import axios from 'axios';


class HelloWorldService {
    executeHelloWorldService(){
        console.log('execute strated');
        return axios.get('http://localhost:8034/initial/helloworld')
            .then(response => console.log(response))
            .catch(console.log("hata"));
    }
}
export default new HelloWorldService();