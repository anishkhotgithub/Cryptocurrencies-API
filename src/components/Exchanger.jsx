import React, { useEffect, useState } from 'react';
import millify from 'millify';
import { Link } from 'react-router-dom';
import { Card,Row,Col,Input } from 'antd';

import { useGetCarsQuery } from '../services/carsApi';
const Exchanger = ({simplified}) => 
{
  const count= simplified? 10:15;
  const { data: carsList, isFetching } = useGetCarsQuery(count);
  const [cars, setCars] = useState();
  
  if(isFetching) return 'Loading...';
  console.log(cars);

  return (
    <div>
      
    </div>
  )
}

export default Exchanger
