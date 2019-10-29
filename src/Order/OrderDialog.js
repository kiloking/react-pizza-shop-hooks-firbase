import React from 'react'
import {Dialog,DialogContent , DiaLogShadow,DialogFooter,ConfirmButton} from '../FoodDialog/FoodDialog'

export function OrderDialog({openOrderDialog , setOpenOrderDialog , setOrder}){
  return openOrderDialog ? <>
    <DiaLogShadow/>
    <Dialog>
      <DialogContent>
        <h2>your order</h2>
        <p>a;slkasl;d ciond pojasdlk nmk'</p>
      </DialogContent>
      <DialogFooter>
        <ConfirmButton onClick={()=>{
          setOrder([]);
          setOpenOrderDialog()
        }}>
          i still hungry
        </ConfirmButton>
      </DialogFooter>
    </Dialog> 
  </>: <div/>
}