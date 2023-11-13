import React, { useEffect, useState } from 'react'

import './Players.css';

export default function Players() {

  return (
    <>

      <div className='container'>
        <button className='btn btn btn-primary'>Как осуществляется покупка кроссовок?</button>
        <button className='btn btn btn-primary'>В какие города доступна доставка?</button>
        <button className='btn btn btn-primary'>Какие доступные способы оплаты в нашем магазине?</button>
        <button className='btn btn btn-primary'>Мне нужна связь с консультантом!</button>
      </div>

    </>
  );
}
