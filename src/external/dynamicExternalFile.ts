import { appFileLink }  from 'src/app/appFileLink';
import { externalLink }  from 'src/external/externalLink';


export function test() {
    alert('We have a test funtion in the external file');
    new appFileLink('external');
    new externalLink();
}

