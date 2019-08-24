import axios from 'axios';


class HelloWorldService {
    executeHelloWorldService(){
        console.log('execute strated');
        return axios.get('http://localhost:8034/initial/helloworld');

    }
    executeHelloWorldServiceBean() {
        console.log('execute strated');
        return axios.get('http://localhost:8034/initial/helloworldbean');
    }
    executeHelloWorldServiceBeanPath(name) {
        console.log('execute strated');
        return axios.get(`http://localhost:8034/initial/helloworldbean/${name}`);
    }
}


export default new HelloWorldService();