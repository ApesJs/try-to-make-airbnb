import Container from "@/Components/Container";
import App from "@/Layouts/App";
import React from "react";

export default function Index({carts}){
    // console.log(carts)
    return(
        <div>
            <Container className=''>
                <div className="bg-green-500 rounded-xl h-64 items-center">
                    data sudah masuk tetapi seharusnya data yang masuk itu dari data table transaksi yang dimana ketarangan nya belum dibayar
                    {carts.length ? carts.map(cart => (
                        <div key={cart.id}>
                            {cart.accommodation.name}
                        </div>
                    )) : 'DATANYA GE GA ADA BROW'}
                </div>
            </Container>
        </div>
    )
}

Index.layout = page => <App children={page}/>