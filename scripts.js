  const combinations = {
      // Hydrogen combinations
      '1,1': { symbol: 'H-H', name: 'Hydrogen' },
      '1,2': { symbol: 'H-He', name: 'Helium' },
      '1,3': { symbol: 'H-Li', name: 'Lithium Hydride' },
      '1,4': { symbol: 'H-Be', name: 'Beryllium Hydride' },
      '1,5': { symbol: 'H-B', name: 'Boron Hydride' },
      '1,6': { symbol: 'H-C', name: 'Methane' },
      '1,7': { symbol: 'H-N', name: 'Ammonia' },
      '1,8': { symbol: 'H2o', name: 'Water' },
      '1,9': { symbol: 'H-F', name: 'Hydrogen Fluoride' },
      '1,10': { symbol: 'H-Ne', name: 'Helium Hydride' },
      '1,11': { symbol: 'H-Na', name: 'Sodium Hydrade' },
      '1,12': { symbol: 'H-Mg', name: 'Magnesium Hydride' },
      '1,14': { symbol: 'H-Si', name: 'Silicon Hydride or Silane' },
      '1,15': { symbol: 'H-P', name: 'Phosphine' },
       '1,16': { symbol: 'H-S', name: 'Hydrogen Sulfide' },
       '1,17': { symbol: 'H-Cl', name: 'Hydrogen Chloride' },
       '1,18': { symbol: 'H-Ar', name: 'Argonium' },
       '1,19': { symbol: 'H-K', name: 'Potassium Hydrogen Phthalate' },
       '1,20': { symbol: 'H-Ca', name: 'Calcium Monohydride' },
      
      // Helium combinations
      '2,2': { symbol: 'He-He', name: 'since helium is inert and doesnt mix with anything it has no cominations, this also includes argon.' },
      
       

      // Lithium combinations
      '3,3': { symbol: 'Li-Li', name: 'Lithium' },
      '3,4': { symbol: 'Li-Be', name: 'Lithium Beryllium' },
      '3,5': { symbol: 'Li-B', name: 'Lithium Boron' },
      '3,6': { symbol: 'Li-C', name: 'Lithium Carbon' },
      '3,7': { symbol: 'Li-N', name: 'Lithium Nitrogen' },
      '3,8': { symbol: 'Li-O', name: 'Lithium Oxygen' },
      '3,9': { symbol: 'Li-F', name: 'Lithium Fluoride' },
      '3,10': { symbol: 'Li-Ne', name: 'Lithium Neon' },
      '3,11': { symbol: 'Li-Sa', name: 'Lithium Sodium' },
           '3,12': { symbol: 'Li-', name: 'placeholder' },
           '3,13': { symbol: 'Li-', name: 'placeholder' },
           '3,14': { symbol: 'Li-', name: 'placeholder' },
           '3,15': { symbol: 'Li-', name: 'placeholder' },
           '3,16': { symbol: 'Li-', name: 'placeholder' },
           '3,17': { symbol: 'Li-', name: 'placeholder' },
           '3,18': { symbol: 'Li-', name: 'placeholder' },
           '3,19': { symbol: 'Li-', name: 'placeholder' },
           '3,20': { symbol: 'Li-', name: 'placeholder' },

      // Beryllium combinations
      '4,4': { symbol: 'Be-Be', name: 'Beryllium' },
      '4,5': { symbol: 'Be-B', name: 'Beryllium Boron' },
      '4,6': { symbol: 'Be-C', name: 'Beryllium Carbon' },
      '4,7': { symbol: 'Be-N', name: 'Beryllium Nitrogen' },
      '4,8': { symbol: 'Be-O', name: 'Beryllium Oxygen' },
      '4,9': { symbol: 'Be-F', name: 'Beryllium Fluoride' },
      '4,10': { symbol: 'Be-Ne', name: 'Beryllium Neon' },
      '4,11': { symbol: 'Be-Sa', name: 'Beryllium-Sodium' },
         '3,12': { symbol: 'Li-', name: 'placeholder' },
           '3,13': { symbol: 'Li-', name: 'placeholder' },
           '3,14': { symbol: 'Li-', name: 'placeholder' },
           '3,15': { symbol: 'Li-', name: 'placeholder' },
           '3,16': { symbol: 'Li-', name: 'placeholder' },
           '3,17': { symbol: 'Li-', name: 'placeholder' },
           '3,18': { symbol: 'Li-', name: 'placeholder' },
           '3,19': { symbol: 'Li-', name: 'placeholder' },
           '3,20': { symbol: 'Li-', name: 'placeholder' },

      // Boron combinations
      '5,5': { symbol: 'B-B', name: 'Boron' },
      '5,6': { symbol: 'B-C', name: 'Boron Carbon' },
      '5,7': { symbol: 'B-N', name: 'Boron Nitrogen' },
      '5,8': { symbol: 'B-O', name: 'Boron Oxygen' },
      '5,9': { symbol: 'B-F', name: 'Boron Fluoride' },
      '5,10': { symbol: 'B-Ne', name: 'Boron Neon' },
      '5,11': { symbol: 'B-Sa', name: 'Borax' },
         '3,12': { symbol: 'Li-', name: 'placeholder' },
           '3,13': { symbol: 'Li-', name: 'placeholder' },
           '3,14': { symbol: 'Li-', name: 'placeholder' },
           '3,15': { symbol: 'Li-', name: 'placeholder' },
           '3,16': { symbol: 'Li-', name: 'placeholder' },
           '3,17': { symbol: 'Li-', name: 'placeholder' },
           '3,18': { symbol: 'Li-', name: 'placeholder' },
           '3,19': { symbol: 'Li-', name: 'placeholder' },
           '3,20': { symbol: 'Li-', name: 'placeholder' },

      // Carbon combinations
      '6,6': { symbol: 'C-C', name: 'Carbon' },
      '6,7': { symbol: 'C-N', name: 'Carbon Nitrogen' },
      '6,8': { symbol: 'C-O', name: 'Carbon Oxygen' },
      '6,9': { symbol: 'C-F', name: 'Carbon Fluoride' },
      '6,10': { symbol: 'C-Ne', name: 'Carbon Neon' },
      '6,11': { symbol: 'C-Sa', name: 'Sodium Bicarbonate' },
       '3,12': { symbol: 'Li-', name: 'placeholder' },
           '3,13': { symbol: 'Li-', name: 'placeholder' },
           '3,14': { symbol: 'Li-', name: 'placeholder' },
           '3,15': { symbol: 'Li-', name: 'placeholder' },
           '3,16': { symbol: 'Li-', name: 'placeholder' },
           '3,17': { symbol: 'Li-', name: 'placeholder' },
           '3,18': { symbol: 'Li-', name: 'placeholder' },
           '3,19': { symbol: 'Li-', name: 'placeholder' },
           '3,20': { symbol: 'Li-', name: 'placeholder' },

      // Nitrogen combinations
      '7,7': { symbol: 'N-N', name: 'Nitrogen' },
      '7,8': { symbol: 'N-O', name: 'Nitrogen Oxygen' },
      '7,9': { symbol: 'N-F', name: 'Nitrogen Fluoride' },
      '7,10': { symbol: 'N-Ne', name: 'Nitrogen Neon' },
      '7,11': { symbol: 'N-Sa', name: 'Sodium Nitride' },
          '3,12': { symbol: 'Li-', name: 'placeholder' },
           '3,13': { symbol: 'Li-', name: 'placeholder' },
           '3,14': { symbol: 'Li-', name: 'placeholder' },
           '3,15': { symbol: 'Li-', name: 'placeholder' },
           '3,16': { symbol: 'Li-', name: 'placeholder' },
           '3,17': { symbol: 'Li-', name: 'placeholder' },
           '3,18': { symbol: 'Li-', name: 'placeholder' },
           '3,19': { symbol: 'Li-', name: 'placeholder' },
           '3,20': { symbol: 'Li-', name: 'placeholder' },

      // Oxygen combinations
      '8,8': { symbol: 'O-O', name: 'Oxygen' },
      '8,9': { symbol: 'O-F', name: 'Oxygen Fluoride' },
      '8,10': { symbol: 'O-Ne', name: 'Oxygen Neon' },
      '8,11': { symbol: 'O-Sa', name: 'Sodium Peroxide' },
           '3,12': { symbol: 'Li-', name: 'placeholder' },
           '3,13': { symbol: 'Li-', name: 'placeholder' },
           '3,14': { symbol: 'Li-', name: 'placeholder' },
           '3,15': { symbol: 'Li-', name: 'placeholder' },
           '3,16': { symbol: 'Li-', name: 'placeholder' },
           '3,17': { symbol: 'Li-', name: 'placeholder' },
           '3,18': { symbol: 'Li-', name: 'placeholder' },
           '3,19': { symbol: 'Li-', name: 'placeholder' },
           '3,20': { symbol: 'Li-', name: 'placeholder' },

      // Fluorine combinations
      '9,9': { symbol: 'F-F', name: 'Fluorine' },
      '9,10': { symbol: 'F-Ne', name: 'Fluorine Neon' },
      '9,11': { symbol: 'F-Sa', name: 'Flourine Sodium' },
           '3,12': { symbol: 'Li-', name: 'placeholder' },
           '3,13': { symbol: 'Li-', name: 'placeholder' },
           '3,14': { symbol: 'Li-', name: 'placeholder' },
           '3,15': { symbol: 'Li-', name: 'placeholder' },
           '3,16': { symbol: 'Li-', name: 'placeholder' },
           '3,17': { symbol: 'Li-', name: 'placeholder' },
           '3,18': { symbol: 'Li-', name: 'placeholder' },
           '3,19': { symbol: 'Li-', name: 'placeholder' },
           '3,20': { symbol: 'Li-', name: 'placeholder' },

      // Neon combinations
      '10,10': { symbol: 'Ne-Ne', name: 'Neon' },
      '10,11': { symbol: 'Ne-Sa', name: 'Neon Sodium' },
         '3,12': { symbol: 'Li-', name: 'Lithium' },
     '3,12': { symbol: 'Li-', name: 'placeholder' },
           '3,13': { symbol: 'Li-', name: 'placeholder' },
           '3,14': { symbol: 'Li-', name: 'placeholder' },
           '3,15': { symbol: 'Li-', name: 'placeholder' },
           '3,16': { symbol: 'Li-', name: 'placeholder' },
           '3,17': { symbol: 'Li-', name: 'placeholder' },
           '3,18': { symbol: 'Li-', name: 'placeholder' },
           '3,19': { symbol: 'Li-', name: 'placeholder' },
           '3,20': { symbol: 'Li-', name: 'placeholder' },

      // Sodium combinations
      '11,11': { symbol: 'Na-Na', name: 'Sodium' },
      '11,12': { symbol: 'Na-Mg', name: 'Sodium Magnesium' },
      '11,13': { symbol: 'Na-Al', name: 'Sodium Aluminum' },
      '11,14': { symbol: 'Na-Si', name: 'Sodium Silicon' },
      '11,15': { symbol: 'Na-P', name: 'Sodium Phosphorus' },
      '11,16': { symbol: 'Na-S', name: 'Sodium Sulfur' },
      '11,17': { symbol: 'Na-Cl', name: 'Sodium Chloride' },
      '11,18': { symbol: 'Na-Ar', name: 'Sodium Argon' },
      '11,19': { symbol: 'Na-K', name: 'Sodium Potassium' },
      '11,20': { symbol: 'Na-Ca', name: 'Sodium Calcium' },

      // Magnesium combinations
      '12,12': { symbol: 'Mg-Mg', name: 'Magnesium' },
      '12,13': { symbol: 'Mg-Al', name: 'Magnesium Aluminum' },
      '12,14': { symbol: 'Mg-Si', name: 'Magnesium Silicon' },
      '12,15': { symbol: 'Mg-P', name: 'Magnesium Phosphorus' },
      '12,16': { symbol: 'Mg-S', name: 'Magnesium Sulfur' },
      '12,17': { symbol: 'Mg-Cl', name: 'Magnesium Chloride' },
      '12,18': { symbol: 'Mg-Ar', name: 'Magnesium Argon' },
      '12,19': { symbol: 'Mg-K', name: 'Magnesium Potassium' },
      '12,20': { symbol: 'Mg-Ca', name: 'Magnesium Calcium' },

      // Aluminum combinations
      '13,13': { symbol: 'Al-Al', name: 'Aluminum' },
      '13,14': { symbol: 'Al-Si', name: 'Aluminum Silicon' },
      '13,15': { symbol: 'Al-P', name: 'Aluminum Phosphorus' },
      '13,16': { symbol: 'Al-S', name: 'Aluminum Sulfur' },
      '13,17': { symbol: 'Al-Cl', name: 'Aluminum Chloride' },
      '13,18': { symbol: 'Al-Ar', name: 'Aluminum Argon' },
      '13,19': { symbol: 'Al-K', name: 'Aluminum Potassium' },
      '13,20': { symbol: 'Al-Ca', name: 'Aluminum Calcium' },

      // Silicon combinations
      '14,14': { symbol: 'Si-Si', name: 'Silicon' },
      '14,15': { symbol: 'Si-P', name: 'Silicon Phosphorus' },
      '14,16': { symbol: 'Si-S', name: 'Silicon Sulfur' },
      '14,17': { symbol: 'Si-Cl', name: 'Silicon Chloride' },
      '14,18': { symbol: 'Si-Ar', name: 'Silicon Argon' },
      '14,19': { symbol: 'Si-K', name: 'Silicon Potassium' },
      '14,20': { symbol: 'Si-Ca', name: 'Silicon Calcium' },

      // Phosphorus combinations
      '15,15': { symbol: 'P-P', name: 'Phosphorus' },
      '15,16': { symbol: 'P-S', name: 'Phosphorus Sulfur' },
      '15,17': { symbol: 'P-Cl', name: 'Phosphorus Chloride' },
      '15,18': { symbol: 'P-Ar', name: 'Phosphorus Argon' },
      '15,19': { symbol: 'P-K', name: 'Phosphorus Potassium' },
      '15,20': { symbol: 'P-Ca', name: 'Phosphorus Calcium' },

      // Sulfur combinations
      '16,16': { symbol: 'S-S', name: 'Sulfur' },
      '16,17': { symbol: 'S-Cl', name: 'Sulfur Chloride' },
      '16,18': { symbol: 'S-Ar', name: 'Sulfur Argon' },
      '16,19': { symbol: 'S-K', name: 'Sulfur Potassium' },
      '16,20': { symbol: 'S-Ca', name: 'Sulfur Calcium' },

      // Chlorine combinations
      '17,17': { symbol: 'Cl-Cl', name: 'Chlorine' },
      '17,18': { symbol: 'Cl-Ar', name: 'Chlorine Argon' },
      '17,19': { symbol: 'Cl-K', name: 'Chlorine Potassium' },
      '17,20': { symbol: 'Cl-Ca', name: 'Chlorine Calcium' },

      // Argon combinations
      '18,18': { symbol: 'Ar-Ar', name: 'Argon' },
      

      // Potassium combinations
      '19,19': { symbol: 'K-K', name: 'Potassium' },
      '19,20': { symbol: 'K-Ca', name: 'Potassium Calcium' },

      // Calcium combinations
      '20,20': { symbol: 'Ca-Ca', name: 'Calcium' }
    };

    function combineElements() {
      const checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
      const selectedElements = Array.from(checkboxes).map(checkbox => checkbox.value);

      const resultDiv = document.getElementById('result');
      resultDiv.innerHTML = '';

      if (selectedElements.length < 2) {
        resultDiv.textContent = 'Please select at least two elements.';
      } else {
        const combinationsList = [];

        for (let i = 0; i < selectedElements.length - 1; i++) {
          for (let j = i + 1; j < selectedElements.length; j++) {
            const element1 = selectedElements[i];
            const element2 = selectedElements[j];
            const combinationKey = `${element1},${element2}`;

            if (combinations.hasOwnProperty(combinationKey)) {
              const combination = combinations[combinationKey];
              combinationsList.push(combination);
            }
          }
        }

        if (combinationsList.length > 0) {
          const table = document.createElement('table');
          const headerRow = table.insertRow();
          const symbolHeader = headerRow.insertCell();
          symbolHeader.textContent = 'Symbol';
          const nameHeader = headerRow.insertCell();
          nameHeader.textContent = 'Name';

          combinationsList.forEach(combination => {
            const row = table.insertRow();
            const symbolCell = row.insertCell();
            symbolCell.textContent = combination.symbol;
            const nameCell = row.insertCell();
            nameCell.textContent = combination.name;
          });

          resultDiv.appendChild(table);
        } else {
          resultDiv.textContent = 'No valid combinations found.';
        }
      }
    }

    const questions=[
        {
          question:"What two elements create Water?",
          answer:'1,8',
        },
        {
          question:"What two elements create Borax?",
          answer:'5,11',
        },
        {
          question:"What two elements create Phosphine?",
          answer:'1,15',
        },
        {
          question:"What two elements create Sodium Bicarbonate?",
          answer:'6,11',
        },
        {
          question:"What two elements create Salt?",
          answer:'11,17',
        },
        {
          question:"good job! you completed the quiz!",
        },

      
    ]
    var currentquestionindex = 0




    

    function clearSelection() {
      const checkboxes = document.querySelectorAll('input[type="checkbox"]');
      checkboxes.forEach(checkbox => {
        checkbox.checked = false;
      });

      const resultDiv = document.getElementById('result');
      resultDiv.innerHTML = '';
    }
    function check() {
     
      const checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
      const selectedElements = Array.from(checkboxes).map(checkbox => checkbox.value);

      let combinationKey = ''
     
          const element1 = selectedElements[0];
          const element2 = selectedElements[1];
          combinationKey = `${element1},${element2}`;
      if (combinationKey === questions[currentquestionindex].answer ) {
        currentquestionindex++;
        const resultDiv = document.getElementById('result');
        resultDiv.innerHTML = 'Correct!'; 
        renderquestion();
        const checkboxes = document.querySelectorAll('input[type="checkbox"]');
      checkboxes.forEach(checkbox => {
        checkbox.checked = false;
      });
      } else {
        const resultDiv = document.getElementById('result');
        resultDiv.innerHTML = 'Try again!';
      }
      
    }
    function renderquestion() {
      const questiondiv = document.getElementById('Question');
      questiondiv.innerHTML=  questions[currentquestionindex].question;
     

    }

