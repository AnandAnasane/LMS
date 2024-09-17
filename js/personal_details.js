//Personel details


    // Mapping of towns/districts to states
    const townToState = {
        // Andhra Pradesh
        'Vijayawada': 'Andhra Pradesh',
        'Visakhapatnam': 'Andhra Pradesh',
        'Tirupati': 'Andhra Pradesh',
        'Guntur': 'Andhra Pradesh',
        'Nellore': 'Andhra Pradesh',
        // Arunachal Pradesh
        'Itanagar': 'Arunachal Pradesh',
        'Pasighat': 'Arunachal Pradesh',
        'Tezu': 'Arunachal Pradesh',
        // Assam
        'Guwahati': 'Assam',
        'Dibrugarh': 'Assam',
        'Silchar': 'Assam',
        'Jorhat': 'Assam',
        'Nagaon': 'Assam',
        // Bihar
        'Patna': 'Bihar',
        'Gaya': 'Bihar',
        'Bhagalpur': 'Bihar',
        'Munger': 'Bihar',
        'Purnia': 'Bihar',
        // Chhattisgarh
        'Raipur': 'Chhattisgarh',
        'Bilaspur': 'Chhattisgarh',
        'Korba': 'Chhattisgarh',
        // Goa
        'Panaji': 'Goa',
        'Margao': 'Goa',
        'Vasco da Gama': 'Goa',
        // Gujarat
        'Ahmedabad': 'Gujarat',
        'Surat': 'Gujarat',
        'Vadodara': 'Gujarat',
        'Rajkot': 'Gujarat',
        'Gandhinagar': 'Gujarat',
        // Haryana
        'Gurugram': 'Haryana',
        'Faridabad': 'Haryana',
        'Ambala': 'Haryana',
        'Hisar': 'Haryana',
        // Himachal Pradesh
        'Shimla': 'Himachal Pradesh',
        'Dharamshala': 'Himachal Pradesh',
        'Solan': 'Himachal Pradesh',
        'Mandi': 'Himachal Pradesh',
        // Jharkhand
        'Ranchi': 'Jharkhand',
        'Jamshedpur': 'Jharkhand',
        'Dhanbad': 'Jharkhand',
        'Bokaro': 'Jharkhand',
        // Karnataka
        'Bengaluru': 'Karnataka',
        'Mysuru': 'Karnataka',
        'Hubli': 'Karnataka',
        'Dharwad': 'Karnataka',
        'Mangalore': 'Karnataka',
        // Kerala
        'Thiruvananthapuram': 'Kerala',
        'Kochi': 'Kerala',
        'Kollam': 'Kerala',
        'Kottayam': 'Kerala',
        'Calicut': 'Kerala',
        // Madhya Pradesh
        'Bhopal': 'Madhya Pradesh',
        'Indore': 'Madhya Pradesh',
        'Gwalior': 'Madhya Pradesh',
        'Jabalpur': 'Madhya Pradesh',
        // Maharashtra
        'Mumbai': 'Maharashtra',
        'Pune': 'Maharashtra',
        'Nagpur': 'Maharashtra',
        'Aurangabad': 'Maharashtra',
        'Nashik': 'Maharashtra',
        // Manipur
        'Imphal': 'Manipur',
        'Thoubal': 'Manipur',
        'Churachandpur': 'Manipur',
        // Meghalaya
        'Shillong': 'Meghalaya',
        'Tura': 'Meghalaya',
        // Mizoram
        'Aizawl': 'Mizoram',
        'Lunglei': 'Mizoram',
        // Nagaland
        'Kohima': 'Nagaland',
        'Dimapur': 'Nagaland',
        // Odisha
        'Bhubaneswar': 'Odisha',
        'Cuttack': 'Odisha',
        'Rourkela': 'Odisha',
        'Berhampur': 'Odisha',
        // Punjab
        'Chandigarh': 'Punjab',
        'Amritsar': 'Punjab',
        'Jalandhar': 'Punjab',
        'Ludhiana': 'Punjab',
        // Rajasthan
        'Jaipur': 'Rajasthan',
        'Udaipur': 'Rajasthan',
        'Jodhpur': 'Rajasthan',
        'Kota': 'Rajasthan',
        // Sikkim
        'Gangtok': 'Sikkim',
        // Tamil Nadu
        'Chennai': 'Tamil Nadu',
        'Coimbatore': 'Tamil Nadu',
        'Madurai': 'Tamil Nadu',
        'Trichy': 'Tamil Nadu',
        // Telangana
        'Hyderabad': 'Telangana',
        'Warangal': 'Telangana',
        'Karimnagar': 'Telangana',
        // Tripura
        'Agartala': 'Tripura',
        // Uttar Pradesh
        'Lucknow': 'Uttar Pradesh',
        'Kanpur': 'Uttar Pradesh',
        'Varanasi': 'Uttar Pradesh',
        'Allahabad': 'Uttar Pradesh',
        // Uttarakhand
        'Dehradun': 'Uttarakhand',
        'Haridwar': 'Uttarakhand',
        'Roorkee': 'Uttarakhand',
        // West Bengal
        'Kolkata': 'West Bengal',
        'Siliguri': 'West Bengal',
        'Durgapur': 'West Bengal',
        'Asansol': 'West Bengal',
        // Andaman and Nicobar Islands
        'Port Blair': 'Andaman and Nicobar Islands',
        // Dadra and Nagar Haveli and Daman and Diu
        'Daman': 'Dadra and Nagar Haveli and Daman and Diu',
        // Delhi
        'Delhi': 'Delhi',
        // Ladakh
        'Leh': 'Ladakh',
        // Lakshadweep
        'Kavaratti': 'Lakshadweep',
        // Puducherry
        'Puducherry': 'Puducherry',
        // Jammu and Kashmir
        'Srinagar': 'Jammu and Kashmir',
        'Jammu': 'Jammu and Kashmir'
    };

    function updateState() {
        const cityInput = document.getElementById('city');
        const stateDropdown = document.getElementById('state');
        
        // Find state based on city/district input
        const state = townToState[cityInput.value.trim()] || '';
        
        // Set the selected state if found
        stateDropdown.value = state;
    }

    // Update state when user types in the city input
    document.getElementById('city').addEventListener('input', updateState);

    // Update state when user selects a city/district from the list
    document.getElementById('city').addEventListener('change', updateState);


//Personal Details Validation


    document.getElementById('personalDetailsForm').addEventListener('submit', function(event) {
        let valid = true;

        // Reset error messages
        document.querySelectorAll('.error').forEach(function(el) {
            el.textContent = '';
        });

        // Address
        const address = document.getElementById('address');
        if (address.value.trim() === '') {
            document.getElementById('addressError').textContent = 'Address is required.';
            valid = false;
        }

        // Landmark
        const landmark = document.getElementById('landmark');
        if (landmark.value.trim() === '') {
            document.getElementById('landmarkError').textContent = 'Landmark is required.';
        }

        // City/District
        const city = document.getElementById('city');
        if (city.value.trim() === '') {
            document.getElementById('cityError').textContent = 'City/District is required.';
            valid = false;
        }

        // Pincode
        const pincode = document.getElementById('pincode');
        const pincodePattern = /^\d{6}$/;
        if (!pincodePattern.test(pincode.value)) {
            document.getElementById('pincodeError').textContent = 'Pincode must be a 6-digit number.';
            valid = false;
        }

        // Locality
        const locality = document.getElementById('locality');
        if (locality.value.trim() === '') {
            document.getElementById('localityError').textContent = 'Locality/Town is required.';
        }

        // State
        const state = document.getElementById('state');
        if (state.value === '') {
            document.getElementById('stateError').textContent = 'State is required.';
            valid = false;
        }

        // Date of Birth
        const dob = document.getElementById('dob');
        if (dob.value === '') {
            document.getElementById('dobError').textContent = 'Date of Birth is required.';
            valid = false;
        }

        // Gender
        const gender = document.getElementById('gender');
        if (gender.value === '') {
            document.getElementById('genderError').textContent = 'Gender is required.';
            valid = false;
        }

        // Guardian Name
        const guardianName = document.getElementById('guardianName');
        if (guardianName.value.trim() === '') {
            document.getElementById('guardianNameError').textContent = 'Guardian Name is required.';
            valid = false;
        }

        // Guardian Phone
        const guardianPhone = document.getElementById('guardianPhone');
        const phonePattern = /^\d{10}$/;
        if (!phonePattern.test(guardianPhone.value)) {
            document.getElementById('guardianPhoneError').textContent = 'Phone number must be a 10-digit number.';
            valid = false;
        }

        // Relation with Guardian
        const relationGuardian = document.getElementById('relationGuardian');
        if (relationGuardian.value === '') {
            document.getElementById('relationGuardianError').textContent = 'Relation with Guardian is required.';
            valid = false;
        }

        // LinkedIn Account ID
        const linkedinId = document.getElementById('linkedinId');
        if (linkedinId.value.trim() !== '' && !/^[\w-]+$/.test(linkedinId.value)) {
            document.getElementById('linkedinIdError').textContent = 'Invalid LinkedIn Account ID. Only alphanumeric characters and hyphens are allowed.';
            valid = false;
        }

        // GitHub Account ID
        const githubId = document.getElementById('githubId');
        if (githubId.value.trim() !== '' && !/^[\w-]+$/.test(githubId.value)) {
            document.getElementById('githubIdError').textContent = 'Invalid GitHub Account ID. Only alphanumeric characters and hyphens are allowed.';
            valid = false;
        }

        // Prevent form submission if validation fails
        if (!valid) {
            event.preventDefault();
        }
    });

