import axios from 'axios';

export default axios.create({
    baseURL:'https://api.yelp.com/v3/businesses',
    headers:{
        Authorization:'Bearer eqkXydY7q2SQjYX0oWty1hXTRG1uhDNUPzGbcZR-pBfAAJTztwtZs2MqGVpgnfKcO7XW663eoDkbdZtyGsj1zdb0oWDVT8SMQeHVEEcvST5vaTaBwiCF8OuO40AtZXYx'
    }
})