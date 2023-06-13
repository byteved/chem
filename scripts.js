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
        '1,16': { symbol: 'H-Si', name: 'Hydrogen Sulfide' },
        '1,17': { symbol: 'H-Cl', name: 'Hydrogen Chloride' },
        '1,18': { symbol: 'H-Ar', name: 'Argonium' },
        '1,19': { symbol: 'H-K', name: 'Potassium Hydrogen Phthalate' },
        '1,20': { symbol: 'H-Ca', name: 'Calcium Monohydride' },
      
      // Helium combinations
      '2,2': { symbol: 'He-He', name: 'since helium is inert and doesnt mix with anything it has no combinations, this also includes argon.' },
      
       

      // Lithium combinations
      '3,1': { symbol: 'Li-He', name: 'Lithium Hydride' },
      '3,3': { symbol: 'Li-Li', name: 'Lithium' },
      '3,4': { symbol: 'Li-Be', name: 'Lithium Beryllium' },
      '3,5': { symbol: 'Li-B', name: 'Lithium Boron' },
      '3,6': { symbol: 'Li-C', name: 'Lithium Carbon' },
      '3,7': { symbol: 'Li-N', name: 'Lithium Nitrogen' },
      '3,8': { symbol: 'Li-O', name: 'Lithium Oxygen' },
      '3,9': { symbol: 'Li-F', name: 'Lithium Fluoride' },
      '3,10': { symbol: 'Li-Ne', name: 'Lithium Neon' },
      '3,11': { symbol: 'Li-Na', name: 'Lithium Sodium' },
              '3,13': { symbol: 'Li-Al', name: 'Lithium Aluminum Hydride' },
              '3,15': { symbol: 'Li-P', name: 'Lithium Phosphorus Sulfide' },
              '3,16': { symbol: 'Li-S', name: 'Lithium-Sulfur' },
              '3,17': { symbol: 'Li-Cl', name: 'Lithium Chloride' },
              '3,19': { symbol: 'Li-K', name: 'Lithium potassium acetyl phosphate' },

      // Beryllium combinations
      '4,1': { symbol: 'Be-H', name: 'Beryllium Hydride ' },
      '4,3': { symbol: 'Be-Li', name: 'Lithium Beryllide' },
      '4,4': { symbol: 'Be-Be', name: 'Beryllium' },
      '4,5': { symbol: 'Be-B', name: 'Beryllium Boron' },
      '4,6': { symbol: 'Be-C', name: 'Beryllium Carbon' },
      '4,7': { symbol: 'Be-N', name: 'Beryllium Nitrogen' },
      '4,8': { symbol: 'Be-O', name: 'Beryllium Oxygen' },
      '4,9': { symbol: 'Be-F', name: 'Beryllium Fluoride' },
      '4,10': { symbol: 'Be-Ne', name: 'Beryllium Neon' },
      '4,11': { symbol: 'Be-Na', name: 'Beryllium-Sodium' },
              '4,13': { symbol: 'Be-Al', name: 'Beryllium-Aluminum' },
              '4,14': { symbol: 'Be-Si', name: 'Beryllium Silicate' },
              '4,15': { symbol: 'Be-P', name: 'Beryllium Phosphate' },
              '4,16': { symbol: 'Be-S', name: 'Beryllium Sulfate' },
              '4,17': { symbol: 'Be-Cl', name: 'Beryllium Chloride' },
              '4,19': { symbol: 'Be-K', name: 'Beryllium Pottasium' },

      // Boron combinations
      '5,1': { symbol: 'B-H', name: 'Diborane' },
      '5,3': { symbol: 'B-Li', name: 'Lithium Tetraborate' },
      '5,4': { symbol: 'B-Be', name: 'Beryllium Boride' },
      '5,5': { symbol: 'B-B', name: 'Boron' },
      '5,6': { symbol: 'B-C', name: 'Boron Carbon' },
      '5,7': { symbol: 'B-N', name: 'Boron Nitrogen' },
      '5,8': { symbol: 'B-O', name: 'Boron Oxygen or Oxoborane' },
      '5,9': { symbol: 'B-F', name: 'Boron Fluoride' },
      '5,10': { symbol: 'B-Ne', name: 'Boron Neon' },
      '5,11': { symbol: 'B-Na', name: 'Borax' },
              '5,13': { symbol: 'B-Al', name: 'Aluminum Borom' },
              '5,14': { symbol: 'B-Si', name: 'Silicon Boride' },
              '5,15': { symbol: 'B-P', name: 'Boron phosphide' },
              '5,16': { symbol: 'B-S', name: 'Boron sulfide' },
              '5,17': { symbol: 'B-Cl', name: 'Boron trichloride' },

      // Carbon combinations 
      '6,1': { symbol: 'C-C', name: 'Hydrocarbons' }, 
      '6,2': { symbol: 'C-He', name: 'Oxygen (O2)' },
      '6,3': { symbol: 'C-Li', name: 'Lithium Carbide' },
      '6,4': { symbol: 'C-Be', name: 'Beryllium Carbide' },
      '6,5': { symbol: 'C-B', name: 'Boron Carbide' },
      '6,6': { symbol: 'C-C', name: 'Carbon' },
      '6,7': { symbol: 'C-N', name: 'Carbon Nitrogen' },
      '6,8': { symbol: 'C-O', name: 'Carbon Oxygen' },
      '6,9': { symbol: 'C-F', name: 'Carbon Fluoride' },
      '6,10': { symbol: 'C-Ne', name: 'Carbon Neon' },
      '6,11': { symbol: 'C-Na', name: 'Sodium Bicarbonate' },
        '6,12': { symbol: 'C-Mg', name: 'Magnesium Carbonate' },
               '6,13': { symbol: 'C-Al', name: 'Aluminum Carbide' },
               '6,14': { symbol: 'C-Si', name: 'Silicon Carbide' },
               '6,16': { symbol: 'C-S', name: 'Carbon Disulfide' },
               '6,17': { symbol: 'C-Cl', name: 'Carbon Tetrachloride' },
               '6,18': { symbol: 'C-Ar', name: 'Argon Carbon Dioxide' },
               '6,19': { symbol: 'C-K', name: 'Potassium Carbonate' },
               '6,20': { symbol: 'C-Ca', name: 'Calcium Carbonate' },

      // Nitrogen combinations 
      '7,1': { symbol: 'N-H', name: 'Ammonia' },
      '7,2': { symbol: 'N-He', name: 'Nitrogen' },
      '7,3': { symbol: 'N-Li', name: 'Lithium Nitride' },
      '7,4': { symbol: 'N-Be', name: 'Beryllium Nitride' },
      '7,5': { symbol: 'N-B', name: 'Boron Nitride' },
      '7,6': { symbol: 'N-C', name: 'Cyanogen' },
      '7,7': { symbol: 'N-N', name: 'Nitrogen' },
      '7,8': { symbol: 'N-O', name: 'Nitrogen Oxygen' },
      '7,9': { symbol: 'N-F', name: 'Nitrogen Fluoride' },
      '7,10': { symbol: 'N-Ne', name: 'Nitrogen Neon' },
      '7,11': { symbol: 'N-Na', name: 'Sodium Nitride' },
            '7,12': { symbol: 'N-Mg', name: 'Magnesium Nitride' },
              '7,13': { symbol: 'N-Al', name: 'Aluminum Nitride' },
              '7,14': { symbol: 'N-Si', name: 'Silicon Nitride' },
              '7,16': { symbol: 'N-S', name: 'Sulfur Mononitride' },
              '7,17': { symbol: 'N-Cl', name: 'Nitrogen Chloride' },
              '7,19': { symbol: 'N-K', name: 'Potassium Nitrate' },
              '7,20': { symbol: 'N-Ca', name: 'Calcium Nitrate' },

      // Oxygen combinations 
      '8,1': { symbol: 'O-H', name: 'Oxyhydrogen' },
      '8,2': { symbol: 'O-He', name: 'Heliox' },
      '8,4': { symbol: 'O-Be', name: 'Beryllium Oxide' },
      '8,5': { symbol: 'O-B', name: 'Boron Oxygen or Oxoborane' },
      '8,6': { symbol: 'O-C', name: 'Carbon Dioxide' },
      '8,7': { symbol: 'O-N', name: 'Nitrogen' },
      '8,8': { symbol: 'O-O', name: 'Oxygen' },
      '8,9': { symbol: 'O-F', name: 'Oxygen Fluoride' },
      '8,10': { symbol: 'O-Ne', name: 'Oxygen Neon' },
      '8,11': { symbol: 'O-Na', name: 'Sodium Peroxide' },
              '8,12': { symbol: 'O-Mg', name: 'Magnesium Oxide' },
              '8,13': { symbol: 'O-Al', name: 'Aluminum Oxide' },
              '8,16': { symbol: 'O-S', name: 'Sulfur trioxide' },
              '8,17': { symbol: 'O-Cl', name: 'Chlorine Oxide' },
              '8,18': { symbol: 'O-Ar', name: 'Oxygen-Argon' },
              '8,19': { symbol: 'O-K', name: 'Potassium oxide' },
              '8,20': { symbol: 'O-Ca', name: 'Calcium oxide' },

      // Fluorine combinations       
      '9,1': { symbol: 'F-H', name: 'Hydrogen Fluoride' },   
      '9,2': { symbol: 'F-He', name: 'Fluorine Helium' },    
      '9,3': { symbol: 'F-Li', name: 'Lithium Fluoride' },    
      '9,4': { symbol: 'F-Be', name: 'Beryllium Fluoride' },    
      '9,5': { symbol: 'F-B', name: 'Boron Monofluoride or Fluoroborylene' }, 
      '9,6': { symbol: 'F-C', name: 'Carbon-Flourine' }, 
      '9,7': { symbol: 'F-N', name: 'Nitrogen Fluoride' }, 
      '9,8': { symbol: 'F-O', name: 'Dioxygen Diflouride' },
      '9,9': { symbol: 'F-F', name: 'Fluorine' },
      '9,10': { symbol: 'F-Ne', name: 'Fluorine Neon' },
      '9,11': { symbol: 'F-Na', name: 'Flourine Sodium' },
              '9,12': { symbol: 'F-Mg', name: 'Magnesium Fluoride' },
              '9,13': { symbol: 'F-Al', name: 'Aluminum Flouride' },
              '9,14': { symbol: 'F-Si', name: 'Silicon Fluoride' },
              '9,15': { symbol: 'F-P', name: 'Phosphoryl Fluoride' },
              '9,16': { symbol: 'F-S', name: 'Sulfur Fluoride' },
              '9,17': { symbol: 'F-Cl', name: 'Chlorine Fluoride' },
              '9,18': { symbol: 'F-Ar ', name: 'Argon Fluorohydride' },
              '9,19': { symbol: 'F-K', name: 'Potassium Fluoride' },
              '9,20': { symbol: 'F-Ca', name: 'Calcium Fluoride' },

      // Neon combinations 
      '10,2': { symbol: 'Ne-He', name: 'Helium-Neon' }, 
      '10,3': { symbol: 'Ne-Li', name: 'Lithium-Neon' }, 
      '10,4': { symbol: 'Ne-Be', name: 'Beryllium-Neon' }, 
      '10,9': { symbol: 'Ne-Fluorine', name: 'Neon F' },
      '10,10': { symbol: 'Ne-Ne', name: 'Neon Fluoride' },
      '10,11': { symbol: 'Ne-Na', name: 'Neon Sodium' },
         '10,12': { symbol: 'Ne-Mg', name: 'Lithium' },
           '10,14': { symbol: 'Ne-Si', name: 'Neon Silicon' },
           '10,17': { symbol: 'Ne-Cl', name: 'Neon Hydrogen Chloride' },

      // Sodium combinations 
      '11,1': { symbol: 'Na-H', name: 'Sodium Hydride' },
      '11,2': { symbol: 'Na-He', name: 'Disodium Helide' },
      '11,5': { symbol: 'Na-B', name: 'Sodium Borate' },
      '11,6': { symbol: 'Na-C', name: 'Sodium Carbonate' },
      '11,7': { symbol: 'Na-N', name: 'Sodium Nitride' },
      '11,9': { symbol: 'Na-F', name: 'Sodium Fluoride' },
      '11,10': { symbol: 'Na-Ne', name: 'Neon Sodium' },
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
       '12,1': { symbol: 'Mg-H', name: 'Magnesium Hydride' },
       '12,2': { symbol: 'Mg-He', name: 'Helium-Magnesium' },
       '12,3': { symbol: 'Mg-Li', name: 'Lithium Magnesium Alloy' },
       '12,6': { symbol: 'Mg-C', name: 'Magnesium Carbonate' },
       '12,7': { symbol: 'Mg-N', name: 'Magnesium Nitride' },
       '12,8': { symbol: 'Mg-O', name: 'Magnesium Oxide.' }, 
       '12,9': { symbol: 'Mg-F', name: 'Magnesium Fluoride' },
       '12,11': { symbol: 'Mg-Na', name: 'Sodium Magnesium Sulfate' },
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
      '13,2': { symbol: 'Al-He', name: 'Aluminum-Helium' },
      '13,3': { symbol: 'Al-Li ', name: 'Aluminum Lithium Alloys' },
      '13,4': { symbol: 'Al-Be', name: 'Aluminum Beryllium' },  
      '13,5': { symbol: 'Al-B', name: 'Aluminum Boron' },
      '13,6': { symbol: 'Al-C', name: 'Aluminum Carbide' },
      '13,7': { symbol: 'Al-N', name: 'Aluminum Nitride' },  
      '13,8': { symbol: 'Al-O', name: 'Aluminum Oxide' }, 
      '13,9': { symbol: 'Al-F', name: 'Aluminum Fluoride' },
      '13,11': { symbol: 'Al-Na ', name: 'Sodium Alum' }, 
         '13,12': { symbol: 'Al-Mg', name: 'Aluminum- Magnesium Hydroxide' },
             '13,13': { symbol: 'Al-Al', name: 'Aluminum' },
             '13,14': { symbol: 'Al-Si', name: 'Aluminum Silicon' },
             '13,15': { symbol: 'Al-P', name: 'Aluminum Phosphorus' },
             '13,16': { symbol: 'Al-S', name: 'Aluminum Sulfur' },
             '13,17': { symbol: 'Al-Cl', name: 'Aluminum Chloride' },
             '13,18': { symbol: 'Al-Ar', name: 'Aluminum Argon' },
             '13,19': { symbol: 'Al-K', name: 'Aluminum Potassium' },
             '13,20': { symbol: 'Al-Ca', name: 'Aluminum Calcium' },

      // Silicon combinations 
       '14,9': { symbol: 'Si-Si', name: 'Silicon' },
      '14,10': { symbol: 'Si-Ne', name: 'Neon Silicon' },
      '14,11': { symbol: 'Si-Na', name: 'Sodium Silicate' },
      '14,13': { symbol: 'Si-Al', name: 'Aluminum Silicon Carbide' },
      '14,14': { symbol: 'Si-Si', name: 'Silicon' },
      '14,15': { symbol: 'Si-P', name: 'Silicon Phosphorus' },
      '14,16': { symbol: 'Si-S', name: 'Silicon Sulfur' },
      '14,17': { symbol: 'Si-Cl', name: 'Silicon Chloride' },
      '14,18': { symbol: 'Si-Ar', name: 'Silicon Argon' },
      '14,19': { symbol: 'Si-K', name: 'Silicon Potassium' },
      '14,20': { symbol: 'Si-Ca', name: 'Silicon Calcium' },

      // Phosphorus combinations  
      '15,2': { symbol: 'P-H', name: 'Phosphine' },
      '15,3': { symbol: 'P-Li', name: 'Lithium Phosphorus Sulfide' },
      '15,4': { symbol: 'P-Be', name: 'Beryllium Phosphate' },
      '15,5': { symbol: 'P-B', name: 'Boron Phosphide' },
      '15,8': { symbol: 'P-O', name: 'Phosphorus Oxide' },
      '15,9': { symbol: 'P-F', name: 'Phosphoryl fluoride' },
      '15,11': { symbol: 'P-Na', name: 'Sodium Phosphorus' },
      '15,12': { symbol: 'P-Mg', name: 'Magnesium Phosphorus' },
      '15,13': { symbol: 'P-Al', name: 'Phosphorus' },
      '15,14': { symbol: 'P-Si', name: 'Silicon Phosphorus' },
      '15,15': { symbol: 'P-P', name: 'Phosphorus' },
      '15,16': { symbol: 'P-S', name: 'Phosphorus Sulfur' },
      '15,17': { symbol: 'P-Cl', name: 'Phosphorus Chloride' },
      '15,18': { symbol: 'P-Ar', name: 'Phosphorus Argon' },
      '15,19': { symbol: 'P-K', name: 'Phosphorus Potassium' },
      '15,20': { symbol: 'P-Ca', name: 'Phosphorus Calcium' },

      // Sulfur combinations     
      '16,1': { symbol: 'S-H', name: 'Hydrogen Sulfide' },
      '16,3': { symbol: 'S-Li', name: 'Lithium Sulfur' },
      '16,4': { symbol: 'S-Be', name: 'Beryllium Sulfate' }, 
      '16,5': { symbol: 'S-B', name: 'Boron Sulfide' },
      '16,6': { symbol: 'S-C', name: 'Carbon Disulfide' },   
      '16,7': { symbol: 'S-N', name: 'Sulfur Mononitride' },
      '16,8': { symbol: 'S-O', name: 'Sulfur Trioxide' },
      '16,9': { symbol: 'S-F', name: 'Sulfur Fluoride' },
      '16,11': { symbol: 'S-Na', name: 'Sodium Sulfur' },  
      '16,12': { symbol: 'S-Mg', name: 'Magnesium Sulfur' },
      '16,13': { symbol: 'S-Al', name: 'Aluminum Sulfur' },
      '16,14': { symbol: 'S-Si', name: 'Silicon Sulfur' },
      '16,15': { symbol: 'S-P', name: 'Phosphorus Sulfur' },
      '16,16': { symbol: 'S-S', name: 'Sulfur' },
      '16,17': { symbol: 'S-Cl', name: 'Sulfur Chloride' },
      '16,18': { symbol: 'S-Ar', name: 'Sulfur Argon' },
      '16,19': { symbol: 'S-K', name: 'Sulfur Potassium' },
      '16,20': { symbol: 'S-Ca', name: 'Sulfur Calcium' },

      // Chlorine combinations 
      '17,1': { symbol: 'Cl-H', name: 'Hydrogen Chloride' },
      '17,3': { symbol: 'Cl-Li', name: 'Lithium Chloride' },
      '17,4': { symbol: 'Cl-Be', name: 'Beryllium Chloride' },
      '17,5': { symbol: 'Cl-B', name: 'Boron Trichloride' }, 
      '17,6': { symbol: 'Cl-C', name: 'Carbon Tetrachloride' },
      '17,7': { symbol: 'Cl-N', name: 'Nitrogen Chloride' },
      '17,8': { symbol: 'Cl-O', name: 'Chlorine Oxide' },
      '17,9': { symbol: 'Cl-F', name: 'Chlorine Fluoride' },
      '17,10': { symbol: 'Cl-Ne', name: 'Neon Hydrogen Chloride' },
      '17,11': { symbol: 'Cl-Na ', name: 'Sodium Chloride' },
      '17,12': { symbol: 'Cl-Mg', name: 'Magnesium Chloride' },
      '17,13': { symbol: 'Cl-Al', name: 'Aluminum Chloride' },
      '17,14': { symbol: 'Cl-Si', name: 'Silicon Chloride' },
      '17,15': { symbol: 'Cl-P', name: 'Phosphorus Chloride' },
      '17,16': { symbol: 'Cl-S', name: 'Sulfur Chloride' },
      '17,17': { symbol: 'Cl-Cl', name: 'Chlorine' },
      '17,18': { symbol: 'Cl-Ar', name: 'Chlorine Argon' },
      '17,19': { symbol: 'Cl-K', name: 'Chlorine Potassium' },
      '17,20': { symbol: 'Cl-Ca', name: 'Chlorine Calcium' },

      // Argon combinations  
      '18,15': { symbol: 'Ar-P', name: 'Phosphorus Argon' },
      '18,16': { symbol: 'Ar-S', name: 'Sulfur Argon' },
      '18,17': { symbol: 'Ar-Cl', name: 'Chlorine Argon' },
      '18,18': { symbol: 'Ar-Ar', name: 'Argon' },
      '18,19': { symbol: 'Ar-K', name: 'K-Ar dating' }, 
      

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

