import React from 'react';

import Carousel from './Carousel';

function Product_detils() {

    return (

        <div className="containor">
            <h2>Thong tin chi tiet</h2>
            <Carousel />
            <>
                <style
                    dangerouslySetInnerHTML={{
                        __html:
                            "\ntable {\n  font-family: arial, sans-serif;\n  border-collapse: collapse;\n  width: 50%;\n}\n\ntd, th {\n  border: 1px solid #dddddd;\n  text-align: left;\n  padding: 8px;\n}\n\ntr:nth-child(even) {\n  background-color: #dddddd;\n}\n"
                    }}
                />
                <h3>Thông tin chi tiết</h3>
                <table style={{marginLeft: '300px'}}>
                    <tbody>
                        <tr>
                            <th>Company</th>
                            <th>Contact</th>
                            <th>Country</th>
                        </tr>
                        <tr>
                            <td>Alfreds Futterkiste</td>
                            <td>Maria Anders</td>
                            <td>Germany</td>
                        </tr>

                        <tr>
                            <td>Ernst Handel</td>
                            <td>Roland Mendel</td>
                            <td>Austria</td>
                        </tr>
                        <tr>
                            <td>Island Trading</td>
                            <td>Helen Bennett</td>
                            <td>UK</td>
                        </tr>
                        <tr>
                            <td>Laughing Bacchus Winecellars</td>
                            <td>Yoshi Tannamuri</td>
                            <td>Canada</td>
                        </tr>
                        <tr>
                            <td>Magazzini Alimentari Riuniti</td>
                            <td>Giovanni Rovelli</td>
                            <td>Italy</td>
                        </tr>
                    </tbody>
                </table>
            </>

        </div>

    )
}
export default Product_detils;