import React, { useContext } from 'react';
import styles from './Brands.module.css'
import { CounterContext } from '../../Context/Counter';

export default function Brands() {
  let {counter,increase}=useContext(CounterContext)
  return (
    <>
    <h2>brands {counter}</h2>
    <button onClick={increase} className="btn btn-danger">click </button>
    </>
  )
}