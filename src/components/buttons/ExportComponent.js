import React from 'react';
import { CSVLink } from 'react-csv';

export default function ExportButton({ issues }) {

    let data = [];
    let headers = [
        { label: "Pass No", key: "passNo" },
        { label: "Name", key: "name" },
        { label: "Contact", key: "contact" },
        { label: "Address", key: "address" },
        { label: "Product ID", key: "id" },
        { label: "Description", key: "description" },
        { label: "Quantity", key: "qty" },
        { label: "Issue Date", key: "issueDate" },
        { label: "Return Date", key: "returnDate" },
        { label: "Product Type", key: "type" },
        { label: "Return Status", key: "status" },
        { label: "Requested By", key: "requestedBy" },
        { label: "Cordinated By", key: "cordinatedBy" },
        { label: "Carried By", key: "carriedBy" },
        { label: "Verified By", key: "verifiedBy" },

    ];

    for (let index = 0; index < issues.length; index++) {

        const issue = issues[index].data();

        for (let i = 0; i < issue.products.length; i++) {
            const product = issue.products[i];
            let singleProductData;
            if (product.status) {
                singleProductData = {
                    passNo: issue.passNo,
                    name: issue.name,
                    contact: issue.contact,
                    address: issue.address,
                    id: product.id,
                    description: product.description,
                    qty: product.qty,
                    issueDate: product.date,
                    returnDate: product.returnDate,
                    type: product.type,
                    status: 'Returned',
                    requestedBy: issue.requestedBy,
                    cordinatedBy: issue.cordinatedBy,
                    carriedBy: issue.carriedBy,
                    verifiedBy: issue.verifiedBy,
                    '': '',
                };
            } else {
                singleProductData = {
                    passNo: issue.passNo,
                    name: issue.name,
                    contact: issue.contact,
                    address: issue.address,
                    id: product.id,
                    description: product.description,
                    qty: product.qty,
                    issueDate: product.date,
                    returnDate: product.returnDate,
                    type: product.type,
                    status: 'Not returned',
                    requestedBy: issue.requestedBy,
                    cordinatedBy: issue.cordinatedBy,
                    carriedBy: issue.carriedBy,
                    verifiedBy: issue.verifiedBy,
                    '': '',
                };
            }
            data.push(singleProductData);
        }
        data.push({});
    }

    const date = new Date();
    const filename = date.getDate().toString() + '-' + (date.getMonth() + 1).toString() + '-' + date.getFullYear().toString();


    return (
        <CSVLink className="btn btn-outline-dark mr-2" data={data} headers={headers} filename={`${filename}.csv`}>
            <span className="fa fa-arrow-down"></span> Export
        </CSVLink>
    );
}