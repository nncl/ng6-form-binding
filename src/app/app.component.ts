import {Component, ViewChild} from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    @ViewChild('f') form: any;

    // API''
    data: any = {
        addresses: [
            {
                name: 'Address 1',
                type: 'commercial',
                value: 400
            },
            {
                name: 'Address 2',
                type: 'commercial-2',
                value: null
            }
        ]
    };

    // APP's
    addresses: any[] = [
        {
            name: 'Address 1',
            type: 'commercial',
            value: null
        },
        {
            name: 'Address 2',
            type: 'commercial-2',
            value: null
        }
    ];

    constructor() {
        this.data.addresses.map((item) => {
            if (item.type === 'commercial') {
                const address = this.addresses.filter((addressItem) => addressItem.type === 'commercial');
                if (item.value) {
                    address[0].value = item.value;
                }
            }

            if (item.type === 'commercial-2') {
                const address = this.addresses.filter((addressItem) => addressItem.type === 'commercial-2');
                if (item.value) {
                    address[0].value = item.value;
                }
            }
        });
    }

    request() {
        console.log(this.addresses);
    }
}
