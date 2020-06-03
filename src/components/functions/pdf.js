import React from 'react';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import { Button } from 'react-bootstrap';
import Logo from '../../../src/assets/images/logo.png'



export function createPdf(data) {
    console.log('print');
    var doc = new jsPDF();

    doc.setFontSize(9);
    doc.text('Security copy/Employee copy', 160, 10)


    doc.setFontSize(12);
    doc.text('("a LogMeIn Group Company") redg. Office: Prestige Khodays Towers, No.5,\n 1st Floor, Raj Bhavan Road, Banglore - 560001, Karnataka, India',
        104,
        25,
        'center'
    );


    doc.setFontSize(15);
    doc.setFontType('bold');
    doc.text('Authorization for taking out material', 60, 45);


    doc.setFontSize(15);
    doc.setFontType('noramal');
    doc.text(`Gate pass number: ${data.passNo}`, 10, 65);



    doc.text(`Date: ${data.products[0].date}`, 140, 65);


    doc.text(`To,\n${data.name}`, 10, 85);



    const bodyOfProducts = data.products.map((product) => {
        return [product.id, product.description, product.date, product.returnDate, product.qty, product.type];
    });
    doc.autoTable({
        theme: 'grid',
        headStyles: { fillColor: '#808080' },
        startY: 105,
        head: [['Serial No.', 'Description', 'Issue Date', 'Return Date', 'Qantity', 'Type']],
        body: bodyOfProducts,
    });



    doc.autoTable({
        theme: 'grid',
        headStyles: { fillColor: '#808080' },
        startY: 180,
        body: [
            ['Requested by', data.name,],
            ['Coordinated by', data.cordinatedBy,],
            ['Carried by', data.carriedBy,],
            ['Carried by sign', '',],
            ['Verified by', data.verifiedBy,],
        ],
    });



    doc.text(`Authorised Signature\n\n\n\nFacilities`, 170, 250, 'center');

    doc.save('a4.pdf')
}
