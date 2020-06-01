import React from 'react';
import { Button } from 'react-bootstrap';

export default function ExportButton({ issues }) {

    function exportCSV() {
        if (issues) {
            var csvRows = [];
            var rawData = [[
                'Pass No', 'Name', 'Contact', 'Address', 'Products', 'Requested By', 'Cordinated By', 'Carried By', 'Verified By'
            ]];
            for (let index = 0; index < issues.length; index++) {
                const issue = issues[index].data();
                var productsString = '';
                for (let i = 0; i < issue.products.length; i++) {
                    const product = issue.products[i];
                    productsString = `${i}. ${product.description}\r\n${product.id}\r\nIssued on: ${product.date}\r\nExpected return: ${product.returnDate}\r\nProduct type: ${product.type}`;
                }
                rawData.push([
                    issue.passNo, issue.name, issue.contact, issue.address, productsString, issue.requestedBy, issue.cordinatedBy, issue.carriedBy, issue.verifiedBy
                ]);
            }
            for (let index = 0; index < rawData.length; index++) {
                csvRows.push(rawData[index].join(','));
            }
            var dataString = csvRows.join('%0A');

            var a = document.createElement('a');
            a.href = 'data:text/csv;charset=utf-8,' + encodeURIComponent(dataString);
            a.download = 'exportfile.csv';
            document.body.appendChild(a);
            a.click();
            console.log(dataString);
        }
    }

    return (
        <Button variant="outline-dark" className="mr-2" onClick={() => exportCSV()}>
            <span className="fa fa-arrow-down"></span> Export CSV
        </Button>
    );
}