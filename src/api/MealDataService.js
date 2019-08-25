import axios from 'axios'

class MealDataService{
    retrieveAllMeals(){
        console.log('get all meal data executed');
        return axios.get('http://localhost:8034/meals/all')
    }

    deleteMeal(code){
        return axios.delete(`http://localhost:8034/meals/${code}`)
    }
}

export default new MealDataService();