import React, { useState } from 'react';
import './prefession.css';
function Prefession() {
    const [students, setstudents] = useState(
        [
            { nom: "Abir", age: 25, email: "abir.nesfi@gmail.com", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQT5f7oocN3ld87XjLT65LaJ0lvD-lxFx_6mg&usqp=CAU" },
            { nom: "Rached", age: 29, email: "rached.benhassen@gmail.com", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_SNm_qYVPwh_8lBfDqh_57BIKJ1Zv1cuwMQ&usqp=CAU" },
            { nom: "Arem", age: 26, email: "arem.atoui@isimg.tn", img: "https://scontent.xx.fbcdn.net/v/t1.15752-9/339088256_567185958843262_1597734654359871899_n.jpg?stp=dst-jpg_p206x206&_nc_cat=106&ccb=1-7&_nc_sid=aee45a&_nc_ohc=JAtT6JHSKVQAX8ctcBO&_nc_oc=AQmZ57LIUmqTbURYvJXtWAVl_qcOZUKzADABk-r1UlnUNjdx_OHck2k4pDIVUcSKJ4G9eIMNFksFkcCu9quRqc7-&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdSk94_2CYYIwyFDOqOpSYCLBirGB_EkFr3ep38DqKkhKw&oe=6454B9BD" },
            { nom: "Oussama", age: 25, email: "oussama.nacer@gmail.com", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRs--BucFLO82L5kFcF4nRuOBaBUU2nVHHPQA&usqp=CAU" },
            { nom: "Nesrine", age: 24, email: "nesrine.fares@gmail.com", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHn9F7IvF85WF2tOuJMCjjJuZe7LHczsKSpA&usqp=CAU" },
            { nom: "Nermine", age: 28, email: "nermine.saidi@gmail.com", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlT4sOkW0zv0rd-Ou2OGQ7ApNtYjua9bnNmg&usqp=CAU" }
        ]
    )
    const [show, setshow] = useState(false)
    return (
        <div>
            <button onClick={() => setshow(!show)}>show students</button>
            <div className="container">
                {show?
                    students.map((el) => (
                        <div className="gens">
                            <img style={{
                                minWidth: "150px", minHeight: "150px", maxWidth: "150px",
                                maxHeight: "150px", borderRadius: "12px"
                            }} src={el.img} alt="description of image" />
                            <h5 className="title">{el.nom}</h5>
                            <h6 className="Email">{el.age}</h6>
                            <h6 className="Em">{el.email}</h6>

                        </div>
                    )):null
                }

            </div>

        </div>
    )
}

export default Prefession