var alp_low = "abcdefghijklmnopqrstuvwxyz";
        var alp_up = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        var count = 0;
        var symbols = "! \"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
        var numbers = "0123456789";

        function name_validate(id) {

            if (id == 'fname') error = document.getElementById('error1');
            else error = document.getElementById('error2');

            var name = document.getElementById(id).value.toLowerCase();

            for (i = 0; i < name.length; i++) {

                for (j = 0; j < 26; j++) {

                    if (name[i] == alp_low[j]) {
                        count = 1;
                        break;
                    }
                }
                if (count == 0)
                    error.innerHTML = "Incorrect format.";
                else
                    error.innerHTML = "";
                count = 0;
            }

        }

        function country(val) {
            country_code = document.getElementById('country-code');

            if (val == 'India') country_code.value = '+91';
            else if (val == 'England') country_code.value = '+44';
            else country_code.value = '+61';
        }

        function check_password(val) {
            error1 = document.getElementById('error3-1');
            error2 = document.getElementById('error3-2');
            error3 = document.getElementById('error3-3');
            error4 = document.getElementById('error3-4');
            error5 = document.getElementById('error3-5');

            error1.style.color = 'red';
            error1.innerHTML = '1 Uppercase is must.';
            count = 0;

            for (i = 0; i < val.length; i++) {
                for (j = 0; j < 26; j++) {
                    if (val[i] == alp_up[j]) {
                        count = 1;
                        break;
                    }
                }
                if (count == 1) {
                    error1.style.color = 'green';
                    error1.innerHTML = "Right";
                    break;
                }

            }

            error2.style.color = 'red';
            error2.innerHTML = '1 Lowercase is must.';
            count = 0;

            for (i = 0; i < val.length; i++) {
                for (j = 0; j < 26; j++) {
                    if (val[i] == alp_low[j]) {
                        count = 1;
                        break;
                    }
                }
                if (count == 1) {
                    error2.style.color = 'green';
                    error2.innerHTML = "Right";
                    break;
                }

            }

            error3.style.color = 'red';
            error3.innerHTML = '1 Symbol is must.';
            count = 0;

            for (i = 0; i < val.length; i++) {
                for (j = 0; j < 33; j++) {
                    if (val[i] == symbols[j]) {
                        count = 1;
                        break;
                    }
                }
                if (count == 1) {
                    error3.style.color = 'green';
                    error3.innerHTML = "Right";
                    break;
                }
            }

            error4.style.color = 'red';
            error4.innerHTML = '1 number is must.';
            count = 0;

            for (i = 0; i < val.length; i++) {
                for (j = 0; j < 10; j++) {
                    if (val[i] == numbers[j]) {
                        count = 1;
                        break;
                    }
                }
                if (count == 1) {
                    error4.style.color = 'green';
                    error4.innerHTML = "Right";
                    break;
                }
            }

            error5.style.color = 'red';
            error5.innerHTML = 'Password length must be between 8-50 characters.';

            if(val.length > 7 && val.length < 51){
                error5.style.color = 'green';
                error5.innerHTML = "Right";
            }
        }

        function confirm_password(val){
            error4 = document.getElementById('error4');
            error4.style.color = 'red';
            error4.innerHTML = 'Password Mismatch';

            if(val == '') 
                error4.innerHTML = "Will you please write?";
            else if(val == document.getElementById('password').value){
                error4.style.color = 'green';
                error4.innerHTML = 'Right';
            }
            
        }

        function verify_phone(val){
            error5 = document.getElementById('error5');
        
            if(isNaN(val) == true || val.length != 10){
                error5.innerHTML = "Invalid Format";
            }
            
            else{
                error5.innerHTML = "";
            }
        }