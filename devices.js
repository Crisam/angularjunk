function DeviceControll($scope) {
$scope.devices = [
  
    {
        installId: 1,
        vendor: 'RI' ,
        name: 'LN-SO2' ,
        serialNumber: '44' ,
        system: 'Linac' ,
        componentType: 'LN Solenoid' ,
        inventoryId: 1,
        typeDescription: 'solenoid accelerator for linac'  
    },
    {
        installId: 2,
        vendor: 'RI' ,
        name: 'LN-SO3' ,
        serialNumber: '43' ,
        system: 'Linac' ,
        componentType: 'LN Solenoid' ,
        inventoryId: 2,
        typeDescription: 'solenoid accelerator for linac'  
    },
    {
        installId: 3,
        vendor: 'RI' ,
        name: 'LN-SO4' ,
        serialNumber: '45' ,
        system: 'Linac' ,
        componentType: 'LN Solenoid' ,
        inventoryId: 3,
        typeDescription: 'solenoid accelerator for linac'  
    },
    {
        installId: 4,
        vendor: 'RI' ,
        name: 'LN-SO5' ,
        serialNumber: '53' ,
        system: 'Linac' ,
        componentType: 'LN Solenoid' ,
        inventoryId: 4,
        typeDescription: 'solenoid accelerator for linac'  
    },
    {
        installId: 5,
        vendor: 'RI' ,
        name: 'LN-SO6' ,
        serialNumber: '55' ,
        system: 'Linac' ,
        componentType: 'LN Solenoid' ,
        inventoryId: 5,
        typeDescription: 'solenoid accelerator for linac'  
    },
    {
        installId: 6,
        vendor: 'RI' ,
        name: 'LN-SO7' ,
        serialNumber: '60' ,
        system: 'Linac' ,
        componentType: 'LN Solenoid' ,
        inventoryId: 6,
        typeDescription: 'solenoid accelerator for linac'  
    },
    {
        installId: 7,
        vendor: 'RI' ,
        name: 'LN-SO8' ,
        serialNumber: '62' ,
        system: 'Linac' ,
        componentType: 'LN Solenoid' ,
        inventoryId: 7,
        typeDescription: 'solenoid accelerator for linac'  
    },
    {
        installId: 8,
        vendor: 'RI' ,
        name: 'LN-SO9' ,
        serialNumber: '50' ,
        system: 'Linac' ,
        componentType: 'LN Solenoid' ,
        inventoryId: 8,
        typeDescription: 'solenoid accelerator for linac'  
    },
    {
        installId: 9,
        vendor: 'RI' ,
        name: 'LN-SO10' ,
        serialNumber: '51' ,
        system: 'Linac' ,
        componentType: 'LN Solenoid' ,
        inventoryId: 9,
        typeDescription: 'solenoid accelerator for linac'  
    },
    {
        installId: 10,
        vendor: 'RI' ,
        name: 'LN-SO11' ,
        serialNumber: '59' ,
        system: 'Linac' ,
        componentType: 'LN Solenoid' ,
        inventoryId: 10,
        typeDescription: 'solenoid accelerator for linac'  
    },
    {
        installId: 11,
        vendor: 'RI' ,
        name: 'LN-SO12' ,
        serialNumber: '46' ,
        system: 'Linac' ,
        componentType: 'LN Solenoid' ,
        inventoryId: 11,
        typeDescription: 'solenoid accelerator for linac'  
    },
    {
        installId: 12,
        vendor: 'RI' ,
        name: 'LN-SO13' ,
        serialNumber: '48' ,
        system: 'Linac' ,
        componentType: 'LN Solenoid' ,
        inventoryId: 12,
        typeDescription: 'solenoid accelerator for linac'  
    },
    {
        installId: 13,
        vendor: 'RI' ,
        name: 'LN-SO14' ,
        serialNumber: '49' ,
        system: 'Linac' ,
        componentType: 'LN Solenoid' ,
        inventoryId: 13,
        typeDescription: 'solenoid accelerator for linac'  
    },
    {
        installId: 14,
        vendor: 'RI' ,
        name: 'LN-SO15' ,
        serialNumber: '4' ,
        system: 'Linac' ,
        componentType: 'LN Solenoid' ,
        inventoryId: 14,
        typeDescription: 'solenoid accelerator for linac'  
    },
    {
        installId: 15,
        vendor: 'RI' ,
        name: 'LN-SO16' ,
        serialNumber: '5' ,
        system: 'Linac' ,
        componentType: 'LN Solenoid' ,
        inventoryId: 15,
        typeDescription: 'solenoid accelerator for linac'  
    },
    {
        installId: 16,
        vendor: 'RI' ,
        name: 'LN-SO17' ,
        serialNumber: '47' ,
        system: 'Linac' ,
        componentType: 'LN Solenoid' ,
        inventoryId: 16,
        typeDescription: 'solenoid accelerator for linac'  
    },
    {
        installId: 17,
        vendor: 'RI' ,
        name: 'LN-SO18' ,
        serialNumber: '58' ,
        system: 'Linac' ,
        componentType: 'LN Solenoid' ,
        inventoryId: 17,
        typeDescription: 'solenoid accelerator for linac'  
    },
    {
        installId: 18,
        vendor: 'RI' ,
        name: 'LN-SO19' ,
        serialNumber: '57' ,
        system: 'Linac' ,
        componentType: 'LN Solenoid' ,
        inventoryId: 18,
        typeDescription: 'solenoid accelerator for linac'  
    },
    {
        installId: 19,
        vendor: 'RI' ,
        name: 'LN-SO20' ,
        serialNumber: '56' ,
        system: 'Linac' ,
        componentType: 'LN Solenoid' ,
        inventoryId: 19,
        typeDescription: 'solenoid accelerator for linac'  
    },
    {
        installId: 20,
        vendor: 'RI' ,
        name: 'LN-Q1' ,
        serialNumber: '1' ,
        system: 'Linac' ,
        componentType: 'LN Quadrupole' ,
        inventoryId: 20,
        typeDescription: 'quadrupole magnet for linac'  
    },
    {
        installId: 21,
        vendor: 'RI' ,
        name: 'LN-Q2' ,
        serialNumber: '2' ,
        system: 'Linac' ,
        componentType: 'LN Quadrupole' ,
        inventoryId: 21,
        typeDescription: 'quadrupole magnet for linac'  
    },
    {
        installId: 22,
        vendor: 'RI' ,
        name: 'LN-Q3' ,
        serialNumber: '3' ,
        system: 'Linac' ,
        componentType: 'LN Quadrupole' ,
        inventoryId: 22,
        typeDescription: 'quadrupole magnet for linac'  
    },
    {
        installId: 23,
        vendor: 'RI' ,
        name: 'LN-Q4' ,
        serialNumber: '4' ,
        system: 'Linac' ,
        componentType: 'LN Quadrupole' ,
        inventoryId: 23,
        typeDescription: 'quadrupole magnet for linac'  
    },
    {
        installId: 24,
        vendor: 'RI' ,
        name: 'LN-Q5' ,
        serialNumber: '5' ,
        system: 'Linac' ,
        componentType: 'LN Quadrupole' ,
        inventoryId: 24,
        typeDescription: 'quadrupole magnet for linac'  
    },
    {
        installId: 25,
        vendor: 'RI' ,
        name: 'LN-Q6' ,
        serialNumber: '6' ,
        system: 'Linac' ,
        componentType: 'LN Quadrupole' ,
        inventoryId: 25,
        typeDescription: 'quadrupole magnet for linac'  
    },
    {
        installId: 26,
        vendor: 'RI' ,
        name: 'LN-Q7' ,
        serialNumber: '7' ,
        system: 'Linac' ,
        componentType: 'LN Quadrupole' ,
        inventoryId: 26,
        typeDescription: 'quadrupole magnet for linac'  
    },
    {
        installId: 27,
        vendor: 'RI' ,
        name: 'LN-Q8' ,
        serialNumber: '8' ,
        system: 'Linac' ,
        componentType: 'LN Quadrupole' ,
        inventoryId: 27,
        typeDescription: 'quadrupole magnet for linac'  
    },
    {
        installId: 28,
        vendor: 'RI' ,
        name: 'LN-Q9' ,
        serialNumber: '9' ,
        system: 'Linac' ,
        componentType: 'LN Quadrupole' ,
        inventoryId: 28,
        typeDescription: 'quadrupole magnet for linac'  
    },
    {
        installId: 29,
        vendor: 'Stangenes, USA' ,
        name: 'LB-B1' ,
        serialNumber: '3' ,
        system: 'LBT' ,
        componentType: 'LBT Dipole' ,
        inventoryId: 29,
        typeDescription: 'dipole magnet for linac to booster transport line'  
    },
    {
        installId: 30,
        vendor: 'Stangenes, USA' ,
        name: 'LB-B2' ,
        serialNumber: '2' ,
        system: 'LBT' ,
        componentType: 'LBT Dipole' ,
        inventoryId: 30,
        typeDescription: 'dipole magnet for linac to booster transport line'  
    },
    {
        installId: 31,
        vendor: 'Stangenes, USA' ,
        name: 'LB-B3' ,
        serialNumber: '1' ,
        system: 'LBT' ,
        componentType: 'LBT Dipole' ,
        inventoryId: 31,
        typeDescription: 'dipole magnet for linac to booster transport line'  
    },
    {
        installId: 32,
        vendor: 'Stangenes, USA' ,
        name: 'LB-B4' ,
        serialNumber: '4' ,
        system: 'LBT' ,
        componentType: 'LBT Dipole' ,
        inventoryId: 32,
        typeDescription: 'dipole magnet for linac to booster transport line'  
    },
    {
        installId: 33,
        vendor: 'Stangenes, USA' ,
        name: 'LB-Q5' ,
        serialNumber: '2' ,
        system: 'LBT' ,
        componentType: 'LBT Quadrupole 1340' ,
        inventoryId: 33,
        typeDescription: 'quadrupole magnet with 134mm aperture.'  
    },
    {
        installId: 34,
        vendor: 'Stangenes, USA' ,
        name: 'LB-Q6' ,
        serialNumber: '1' ,
        system: 'LBT' ,
        componentType: 'LBT Quadrupole 1340' ,
        inventoryId: 34,
        typeDescription: 'quadrupole magnet with 134mm aperture.'  
    },
    {
        installId: 35,
        vendor: 'Stangenes, USA' ,
        name: 'LB-Q1' ,
        serialNumber: '1' ,
        system: 'LBT' ,
        componentType: 'LBT Quadrupole 5200' ,
        inventoryId: 35,
        typeDescription: 'quadrupole magnet with 52mm aperture'  
    },
    {
        installId: 36,
        vendor: 'Stangenes, USA' ,
        name: 'LB-Q2' ,
        serialNumber: '2' ,
        system: 'LBT' ,
        componentType: 'LBT Quadrupole 5200' ,
        inventoryId: 36,
        typeDescription: 'quadrupole magnet with 52mm aperture'  
    },
    {
        installId: 37,
        vendor: 'Stangenes, USA' ,
        name: 'LB-Q3' ,
        serialNumber: '6' ,
        system: 'LBT' ,
        componentType: 'LBT Quadrupole 5200' ,
        inventoryId: 37,
        typeDescription: 'quadrupole magnet with 52mm aperture'  
    },
    {
        installId: 38,
        vendor: 'Stangenes, USA' ,
        name: 'LB-Q4' ,
        serialNumber: '5' ,
        system: 'LBT' ,
        componentType: 'LBT Quadrupole 5200' ,
        inventoryId: 38,
        typeDescription: 'quadrupole magnet with 52mm aperture'  
    },
    {
        installId: 39,
        vendor: 'Stangenes, USA' ,
        name: 'LB-Q7' ,
        serialNumber: '4' ,
        system: 'LBT' ,
        componentType: 'LBT Quadrupole 5200' ,
        inventoryId: 39,
        typeDescription: 'quadrupole magnet with 52mm aperture'  
    },
    {
        installId: 40,
        vendor: 'Stangenes, USA' ,
        name: 'LB-Q8' ,
        serialNumber: '9' ,
        system: 'LBT' ,
        componentType: 'LBT Quadrupole 5200' ,
        inventoryId: 40,
        typeDescription: 'quadrupole magnet with 52mm aperture'  
    },
    {
        installId: 41,
        vendor: 'Stangenes, USA' ,
        name: 'LB-Q9' ,
        serialNumber: '13' ,
        system: 'LBT' ,
        componentType: 'LBT Quadrupole 5200' ,
        inventoryId: 41,
        typeDescription: 'quadrupole magnet with 52mm aperture'  
    },
    {
        installId: 42,
        vendor: 'Stangenes, USA' ,
        name: 'LB-Q10' ,
        serialNumber: '8' ,
        system: 'LBT' ,
        componentType: 'LBT Quadrupole 5200' ,
        inventoryId: 42,
        typeDescription: 'quadrupole magnet with 52mm aperture'  
    },
    {
        installId: 43,
        vendor: 'Stangenes, USA' ,
        name: 'LB-Q11' ,
        serialNumber: '10' ,
        system: 'LBT' ,
        componentType: 'LBT Quadrupole 5200' ,
        inventoryId: 43,
        typeDescription: 'quadrupole magnet with 52mm aperture'  
    },
    {
        installId: 44,
        vendor: 'Stangenes, USA' ,
        name: 'LB-Q12' ,
        serialNumber: '11' ,
        system: 'LBT' ,
        componentType: 'LBT Quadrupole 5200' ,
        inventoryId: 44,
        typeDescription: 'quadrupole magnet with 52mm aperture'  
    },
    {
        installId: 45,
        vendor: 'Stangenes, USA' ,
        name: 'LB-Q13' ,
        serialNumber: '12' ,
        system: 'LBT' ,
        componentType: 'LBT Quadrupole 5200' ,
        inventoryId: 45,
        typeDescription: 'quadrupole magnet with 52mm aperture'  
    },
    {
        installId: 46,
        vendor: 'Stangenes, USA' ,
        name: 'LB-Q14' ,
        serialNumber: '14' ,
        system: 'LBT' ,
        componentType: 'LBT Quadrupole 5200' ,
        inventoryId: 46,
        typeDescription: 'quadrupole magnet with 52mm aperture'  
    },
    {
        installId: 47,
        vendor: 'Stangenes, USA' ,
        name: 'LB-Q15' ,
        serialNumber: '15' ,
        system: 'LBT' ,
        componentType: 'LBT Quadrupole 5200' ,
        inventoryId: 47,
        typeDescription: 'quadrupole magnet with 52mm aperture'  
    },
    {
        installId: 48,
        vendor: 'Stangenes, USA' ,
        name: 'LB-Q1BD1' ,
        serialNumber: '7' ,
        system: 'LBT' ,
        componentType: 'LBT Quadrupole 5200' ,
        inventoryId: 48,
        typeDescription: 'quadrupole magnet with 52mm aperture'  
    },
    {
        installId: 49,
        vendor: 'Stangenes, USA' ,
        name: 'LB-Q2BD1' ,
        serialNumber: '3' ,
        system: 'LBT' ,
        componentType: 'LBT Quadrupole 5200' ,
        inventoryId: 49,
        typeDescription: 'quadrupole magnet with 52mm aperture'  
    },
    {
        installId: 50,
        vendor: 'BINP, Russia' ,
        name: 'A1BD1' ,
        serialNumber: '24' ,
        system: 'Booster' ,
        componentType: 'BS Dipole BD1' ,
        inventoryId: 50,
        typeDescription: 'Dipole type BD1 for booster ring'  
    },
    {
        installId: 51,
        vendor: 'BINP, Russia' ,
        name: 'A1BD2' ,
        serialNumber: '4' ,
        system: 'Booster' ,
        componentType: 'BS Dipole BD1' ,
        inventoryId: 51,
        typeDescription: 'Dipole type BD1 for booster ring'  
    },
    {
        installId: 52,
        vendor: 'BINP, Russia' ,
        name: 'A1BD3' ,
        serialNumber: '5' ,
        system: 'Booster' ,
        componentType: 'BS Dipole BD1' ,
        inventoryId: 52,
        typeDescription: 'Dipole type BD1 for booster ring'  
    },
    {
        installId: 53,
        vendor: 'BINP, Russia' ,
        name: 'A1BD4' ,
        serialNumber: '6' ,
        system: 'Booster' ,
        componentType: 'BS Dipole BD1' ,
        inventoryId: 53,
        typeDescription: 'Dipole type BD1 for booster ring'  
    },
    {
        installId: 54,
        vendor: 'BINP, Russia' ,
        name: 'A1BD5' ,
        serialNumber: '25' ,
        system: 'Booster' ,
        componentType: 'BS Dipole BD1' ,
        inventoryId: 54,
        typeDescription: 'Dipole type BD1 for booster ring'  
    },
    {
        installId: 55,
        vendor: 'BINP, Russia' ,
        name: 'A1BD6' ,
        serialNumber: '11' ,
        system: 'Booster' ,
        componentType: 'BS Dipole BD1' ,
        inventoryId: 55,
        typeDescription: 'Dipole type BD1 for booster ring'  
    },
    {
        installId: 56,
        vendor: 'BINP, Russia' ,
        name: 'A1BD7' ,
        serialNumber: '12' ,
        system: 'Booster' ,
        componentType: 'BS Dipole BD1' ,
        inventoryId: 56,
        typeDescription: 'Dipole type BD1 for booster ring'  
    },
    {
        installId: 57,
        vendor: 'BINP, Russia' ,
        name: 'A1BD8' ,
        serialNumber: '22' ,
        system: 'Booster' ,
        componentType: 'BS Dipole BD1' ,
        inventoryId: 57,
        typeDescription: 'Dipole type BD1 for booster ring'  
    },
    {
        installId: 58,
        vendor: 'BINP, Russia' ,
        name: 'A2BD1' ,
        serialNumber: '2' ,
        system: 'Booster' ,
        componentType: 'BS Dipole BD1' ,
        inventoryId: 58,
        typeDescription: 'Dipole type BD1 for booster ring'  
    },
    {
        installId: 59,
        vendor: 'BINP, Russia' ,
        name: 'A2BD2' ,
        serialNumber: '16' ,
        system: 'Booster' ,
        componentType: 'BS Dipole BD1' ,
        inventoryId: 59,
        typeDescription: 'Dipole type BD1 for booster ring'  
    },
    {
        installId: 60,
        vendor: 'BINP, Russia' ,
        name: 'A2BD3' ,
        serialNumber: '10' ,
        system: 'Booster' ,
        componentType: 'BS Dipole BD1' ,
        inventoryId: 60,
        typeDescription: 'Dipole type BD1 for booster ring'  
    },
    {
        installId: 61,
        vendor: 'BINP, Russia' ,
        name: 'A2BD4' ,
        serialNumber: '18' ,
        system: 'Booster' ,
        componentType: 'BS Dipole BD1' ,
        inventoryId: 61,
        typeDescription: 'Dipole type BD1 for booster ring'  
    },
    {
        installId: 62,
        vendor: 'BINP, Russia' ,
        name: 'A2BD5' ,
        serialNumber: '15' ,
        system: 'Booster' ,
        componentType: 'BS Dipole BD1' ,
        inventoryId: 62,
        typeDescription: 'Dipole type BD1 for booster ring'  
    },
    {
        installId: 63,
        vendor: 'BINP, Russia' ,
        name: 'A2BD6' ,
        serialNumber: '23' ,
        system: 'Booster' ,
        componentType: 'BS Dipole BD1' ,
        inventoryId: 63,
        typeDescription: 'Dipole type BD1 for booster ring'  
    },
    {
        installId: 64,
        vendor: 'BINP, Russia' ,
        name: 'A2BD7' ,
        serialNumber: '33' ,
        system: 'Booster' ,
        componentType: 'BS Dipole BD1' ,
        inventoryId: 64,
        typeDescription: 'Dipole type BD1 for booster ring'  
    },
    {
        installId: 65,
        vendor: 'BINP, Russia' ,
        name: 'A2BD8' ,
        serialNumber: '28' ,
        system: 'Booster' ,
        componentType: 'BS Dipole BD1' ,
        inventoryId: 65,
        typeDescription: 'Dipole type BD1 for booster ring'  
    },
    {
        installId: 66,
        vendor: 'BINP, Russia' ,
        name: 'A3BD1' ,
        serialNumber: '32' ,
        system: 'Booster' ,
        componentType: 'BS Dipole BD2' ,
        inventoryId: 66,
        typeDescription: 'Dipole type BD2 for booster ring'  
    },
    {
        installId: 67,
        vendor: 'BINP, Russia' ,
        name: 'A3BD2' ,
        serialNumber: '26' ,
        system: 'Booster' ,
        componentType: 'BS Dipole BD2' ,
        inventoryId: 67,
        typeDescription: 'Dipole type BD2 for booster ring'  
    },
    {
        installId: 68,
        vendor: 'BINP, Russia' ,
        name: 'A3BD3' ,
        serialNumber: '17' ,
        system: 'Booster' ,
        componentType: 'BS Dipole BD2' ,
        inventoryId: 68,
        typeDescription: 'Dipole type BD2 for booster ring'  
    },
    {
        installId: 69,
        vendor: 'BINP, Russia' ,
        name: 'A3BD4' ,
        serialNumber: '8' ,
        system: 'Booster' ,
        componentType: 'BS Dipole BD2' ,
        inventoryId: 69,
        typeDescription: 'Dipole type BD2 for booster ring'  
    },
    {
        installId: 70,
        vendor: 'BINP, Russia' ,
        name: 'A3BD5' ,
        serialNumber: '29' ,
        system: 'Booster' ,
        componentType: 'BS Dipole BD2' ,
        inventoryId: 70,
        typeDescription: 'Dipole type BD2 for booster ring'  
    },
    {
        installId: 71,
        vendor: 'BINP, Russia' ,
        name: 'A3BD6' ,
        serialNumber: '34' ,
        system: 'Booster' ,
        componentType: 'BS Dipole BD2' ,
        inventoryId: 71,
        typeDescription: 'Dipole type BD2 for booster ring'  
    },
    {
        installId: 72,
        vendor: 'BINP, Russia' ,
        name: 'A3BD7' ,
        serialNumber: '3' ,
        system: 'Booster' ,
        componentType: 'BS Dipole BD2' ,
        inventoryId: 72,
        typeDescription: 'Dipole type BD2 for booster ring'  
    },
    {
        installId: 73,
        vendor: 'BINP, Russia' ,
        name: 'A3BD8' ,
        serialNumber: '21' ,
        system: 'Booster' ,
        componentType: 'BS Dipole BD2' ,
        inventoryId: 73,
        typeDescription: 'Dipole type BD2 for booster ring'  
    },
    {
        installId: 74,
        vendor: 'BINP, Russia' ,
        name: 'A4BD1' ,
        serialNumber: '31' ,
        system: 'Booster' ,
        componentType: 'BS Dipole BD2' ,
        inventoryId: 74,
        typeDescription: 'Dipole type BD2 for booster ring'  
    },
    {
        installId: 75,
        vendor: 'BINP, Russia' ,
        name: 'A4BD2' ,
        serialNumber: '7' ,
        system: 'Booster' ,
        componentType: 'BS Dipole BD2' ,
        inventoryId: 75,
        typeDescription: 'Dipole type BD2 for booster ring'  
    },
    {
        installId: 76,
        vendor: 'BINP, Russia' ,
        name: 'A4BD3' ,
        serialNumber: '14' ,
        system: 'Booster' ,
        componentType: 'BS Dipole BD2' ,
        inventoryId: 76,
        typeDescription: 'Dipole type BD2 for booster ring'  
    },
    {
        installId: 77,
        vendor: 'BINP, Russia' ,
        name: 'A4BD4' ,
        serialNumber: '13' ,
        system: 'Booster' ,
        componentType: 'BS Dipole BD2' ,
        inventoryId: 77,
        typeDescription: 'Dipole type BD2 for booster ring'  
    },
    {
        installId: 78,
        vendor: 'BINP, Russia' ,
        name: 'A4BD5' ,
        serialNumber: '19' ,
        system: 'Booster' ,
        componentType: 'BS Dipole BD2' ,
        inventoryId: 78,
        typeDescription: 'Dipole type BD2 for booster ring'  
    },
    {
        installId: 79,
        vendor: 'BINP, Russia' ,
        name: 'A4BD6' ,
        serialNumber: '9' ,
        system: 'Booster' ,
        componentType: 'BS Dipole BD2' ,
        inventoryId: 79,
        typeDescription: 'Dipole type BD2 for booster ring'  
    },
    {
        installId: 80,
        vendor: 'BINP, Russia' ,
        name: 'A4BD7' ,
        serialNumber: '30' ,
        system: 'Booster' ,
        componentType: 'BS Dipole BD2' ,
        inventoryId: 80,
        typeDescription: 'Dipole type BD2 for booster ring'  
    },
    {
        installId: 81,
        vendor: 'BINP, Russia' ,
        name: 'A4BD8' ,
        serialNumber: '20' ,
        system: 'Booster' ,
        componentType: 'BS Dipole BD2' ,
        inventoryId: 81,
        typeDescription: 'Dipole type BD2 for booster ring'  
    },
    {
        installId: 82,
        vendor: 'BINP, Russia' ,
        name: 'A1BF1' ,
        serialNumber: '26' ,
        system: 'Booster' ,
        componentType: 'BS Dipole BF' ,
        inventoryId: 82,
        typeDescription: 'Dipole type BF for booster ring'  
    },
    {
        installId: 83,
        vendor: 'BINP, Russia' ,
        name: 'A1BF2' ,
        serialNumber: '6' ,
        system: 'Booster' ,
        componentType: 'BS Dipole BF' ,
        inventoryId: 83,
        typeDescription: 'Dipole type BF for booster ring'  
    },
    {
        installId: 84,
        vendor: 'BINP, Russia' ,
        name: 'A1BF3' ,
        serialNumber: '9' ,
        system: 'Booster' ,
        componentType: 'BS Dipole BF' ,
        inventoryId: 84,
        typeDescription: 'Dipole type BF for booster ring'  
    },
    {
        installId: 85,
        vendor: 'BINP, Russia' ,
        name: 'A1BF4' ,
        serialNumber: '12' ,
        system: 'Booster' ,
        componentType: 'BS Dipole BF' ,
        inventoryId: 85,
        typeDescription: 'Dipole type BF for booster ring'  
    },
    {
        installId: 86,
        vendor: 'BINP, Russia' ,
        name: 'A1BF5' ,
        serialNumber: '25' ,
        system: 'Booster' ,
        componentType: 'BS Dipole BF' ,
        inventoryId: 86,
        typeDescription: 'Dipole type BF for booster ring'  
    },
    {
        installId: 87,
        vendor: 'BINP, Russia' ,
        name: 'A1BF6' ,
        serialNumber: '8' ,
        system: 'Booster' ,
        componentType: 'BS Dipole BF' ,
        inventoryId: 87,
        typeDescription: 'Dipole type BF for booster ring'  
    },
    {
        installId: 88,
        vendor: 'BINP, Russia' ,
        name: 'A1BF7' ,
        serialNumber: '13' ,
        system: 'Booster' ,
        componentType: 'BS Dipole BF' ,
        inventoryId: 88,
        typeDescription: 'Dipole type BF for booster ring'  
    },
    {
        installId: 89,
        vendor: 'BINP, Russia' ,
        name: 'A2BF1' ,
        serialNumber: '16' ,
        system: 'Booster' ,
        componentType: 'BS Dipole BF' ,
        inventoryId: 89,
        typeDescription: 'Dipole type BF for booster ring'  
    },
    {
        installId: 90,
        vendor: 'BINP, Russia' ,
        name: 'A2BF2' ,
        serialNumber: '18' ,
        system: 'Booster' ,
        componentType: 'BS Dipole BF' ,
        inventoryId: 90,
        typeDescription: 'Dipole type BF for booster ring'  
    },
    {
        installId: 91,
        vendor: 'BINP, Russia' ,
        name: 'A2BF3' ,
        serialNumber: '7' ,
        system: 'Booster' ,
        componentType: 'BS Dipole BF' ,
        inventoryId: 91,
        typeDescription: 'Dipole type BF for booster ring'  
    },
    {
        installId: 92,
        vendor: 'BINP, Russia' ,
        name: 'A2BF4' ,
        serialNumber: '24' ,
        system: 'Booster' ,
        componentType: 'BS Dipole BF' ,
        inventoryId: 92,
        typeDescription: 'Dipole type BF for booster ring'  
    },
    {
        installId: 93,
        vendor: 'BINP, Russia' ,
        name: 'A2BF5' ,
        serialNumber: '10' ,
        system: 'Booster' ,
        componentType: 'BS Dipole BF' ,
        inventoryId: 93,
        typeDescription: 'Dipole type BF for booster ring'  
    },
    {
        installId: 94,
        vendor: 'BINP, Russia' ,
        name: 'A2BF6' ,
        serialNumber: '4' ,
        system: 'Booster' ,
        componentType: 'BS Dipole BF' ,
        inventoryId: 94,
        typeDescription: 'Dipole type BF for booster ring'  
    },
    {
        installId: 95,
        vendor: 'BINP, Russia' ,
        name: 'A2BF7' ,
        serialNumber: '2' ,
        system: 'Booster' ,
        componentType: 'BS Dipole BF' ,
        inventoryId: 95,
        typeDescription: 'Dipole type BF for booster ring'  
    },
    {
        installId: 96,
        vendor: 'BINP, Russia' ,
        name: 'A3BF1' ,
        serialNumber: '29' ,
        system: 'Booster' ,
        componentType: 'BS Dipole BF' ,
        inventoryId: 96,
        typeDescription: 'Dipole type BF for booster ring'  
    },
    {
        installId: 97,
        vendor: 'BINP, Russia' ,
        name: 'A3BF2' ,
        serialNumber: '15' ,
        system: 'Booster' ,
        componentType: 'BS Dipole BF' ,
        inventoryId: 97,
        typeDescription: 'Dipole type BF for booster ring'  
    },
    {
        installId: 98,
        vendor: 'BINP, Russia' ,
        name: 'A3BF3' ,
        serialNumber: '14' ,
        system: 'Booster' ,
        componentType: 'BS Dipole BF' ,
        inventoryId: 98,
        typeDescription: 'Dipole type BF for booster ring'  
    },
    {
        installId: 99,
        vendor: 'BINP, Russia' ,
        name: 'A3BF4' ,
        serialNumber: '20' ,
        system: 'Booster' ,
        componentType: 'BS Dipole BF' ,
        inventoryId: 99,
        typeDescription: 'Dipole type BF for booster ring'  
    },
    {
        installId: 100,
        vendor: 'BINP, Russia' ,
        name: 'A3BF5' ,
        serialNumber: '21' ,
        system: 'Booster' ,
        componentType: 'BS Dipole BF' ,
        inventoryId: 100,
        typeDescription: 'Dipole type BF for booster ring'  
    },
    {
        installId: 101,
        vendor: 'BINP, Russia' ,
        name: 'A3BF6' ,
        serialNumber: '11' ,
        system: 'Booster' ,
        componentType: 'BS Dipole BF' ,
        inventoryId: 101,
        typeDescription: 'Dipole type BF for booster ring'  
    },
    {
        installId: 102,
        vendor: 'BINP, Russia' ,
        name: 'A3BF7' ,
        serialNumber: '3' ,
        system: 'Booster' ,
        componentType: 'BS Dipole BF' ,
        inventoryId: 102,
        typeDescription: 'Dipole type BF for booster ring'  
    },
    {
        installId: 103,
        vendor: 'BINP, Russia' ,
        name: 'A4BF1' ,
        serialNumber: '22' ,
        system: 'Booster' ,
        componentType: 'BS Dipole BF' ,
        inventoryId: 103,
        typeDescription: 'Dipole type BF for booster ring'  
    },
    {
        installId: 104,
        vendor: 'BINP, Russia' ,
        name: 'A4BF2' ,
        serialNumber: '5' ,
        system: 'Booster' ,
        componentType: 'BS Dipole BF' ,
        inventoryId: 104,
        typeDescription: 'Dipole type BF for booster ring'  
    },
    {
        installId: 105,
        vendor: 'BINP, Russia' ,
        name: 'A4BF3' ,
        serialNumber: '19' ,
        system: 'Booster' ,
        componentType: 'BS Dipole BF' ,
        inventoryId: 105,
        typeDescription: 'Dipole type BF for booster ring'  
    },
    {
        installId: 106,
        vendor: 'BINP, Russia' ,
        name: 'A4BF4' ,
        serialNumber: '17' ,
        system: 'Booster' ,
        componentType: 'BS Dipole BF' ,
        inventoryId: 106,
        typeDescription: 'Dipole type BF for booster ring'  
    },
    {
        installId: 107,
        vendor: 'BINP, Russia' ,
        name: 'A4BF5' ,
        serialNumber: '27' ,
        system: 'Booster' ,
        componentType: 'BS Dipole BF' ,
        inventoryId: 107,
        typeDescription: 'Dipole type BF for booster ring'  
    },
    {
        installId: 108,
        vendor: 'BINP, Russia' ,
        name: 'A4BF6' ,
        serialNumber: '30' ,
        system: 'Booster' ,
        componentType: 'BS Dipole BF' ,
        inventoryId: 108,
        typeDescription: 'Dipole type BF for booster ring'  
    },
    {
        installId: 109,
        vendor: 'BINP, Russia' ,
        name: 'A4BF7' ,
        serialNumber: '23' ,
        system: 'Booster' ,
        componentType: 'BS Dipole BF' ,
        inventoryId: 109,
        typeDescription: 'Dipole type BF for booster ring'  
    },
    {
        installId: 110,
        vendor: 'BINP, Russia' ,
        name: 'A1QF1' ,
        serialNumber: '1' ,
        system: 'Booster' ,
        componentType: 'BS Quadrupole QF' ,
        inventoryId: 110,
        typeDescription: 'Quadrupole type QF for booster ring'  
    },
    {
        installId: 111,
        vendor: 'BINP, Russia' ,
        name: 'A1QF2' ,
        serialNumber: '2' ,
        system: 'Booster' ,
        componentType: 'BS Quadrupole QF' ,
        inventoryId: 111,
        typeDescription: 'Quadrupole type QF for booster ring'  
    },
    {
        installId: 112,
        vendor: 'BINP, Russia' ,
        name: 'A2QF1' ,
        serialNumber: '3' ,
        system: 'Booster' ,
        componentType: 'BS Quadrupole QF' ,
        inventoryId: 112,
        typeDescription: 'Quadrupole type QF for booster ring'  
    },
    {
        installId: 113,
        vendor: 'BINP, Russia' ,
        name: 'A2QF2' ,
        serialNumber: '4' ,
        system: 'Booster' ,
        componentType: 'BS Quadrupole QF' ,
        inventoryId: 113,
        typeDescription: 'Quadrupole type QF for booster ring'  
    },
    {
        installId: 114,
        vendor: 'BINP, Russia' ,
        name: 'A3QF1' ,
        serialNumber: '5' ,
        system: 'Booster' ,
        componentType: 'BS Quadrupole QF' ,
        inventoryId: 114,
        typeDescription: 'Quadrupole type QF for booster ring'  
    },
    {
        installId: 115,
        vendor: 'BINP, Russia' ,
        name: 'A3QF2' ,
        serialNumber: '6' ,
        system: 'Booster' ,
        componentType: 'BS Quadrupole QF' ,
        inventoryId: 115,
        typeDescription: 'Quadrupole type QF for booster ring'  
    },
    {
        installId: 116,
        vendor: 'BINP, Russia' ,
        name: 'A4QF1' ,
        serialNumber: '7' ,
        system: 'Booster' ,
        componentType: 'BS Quadrupole QF' ,
        inventoryId: 116,
        typeDescription: 'Quadrupole type QF for booster ring'  
    },
    {
        installId: 117,
        vendor: 'BINP, Russia' ,
        name: 'A4QF2' ,
        serialNumber: '8' ,
        system: 'Booster' ,
        componentType: 'BS Quadrupole QF' ,
        inventoryId: 117,
        typeDescription: 'Quadrupole type QF for booster ring'  
    },
    {
        installId: 118,
        vendor: 'BINP, Russia' ,
        name: 'A1QD1' ,
        serialNumber: '1' ,
        system: 'Booster' ,
        componentType: 'BS Quadrupole QD' ,
        inventoryId: 118,
        typeDescription: 'Quadrupole type QD for booster ring'  
    },
    {
        installId: 119,
        vendor: 'BINP, Russia' ,
        name: 'A1QD2' ,
        serialNumber: '2' ,
        system: 'Booster' ,
        componentType: 'BS Quadrupole QD' ,
        inventoryId: 119,
        typeDescription: 'Quadrupole type QD for booster ring'  
    },
    {
        installId: 120,
        vendor: 'BINP, Russia' ,
        name: 'A2QD1' ,
        serialNumber: '3' ,
        system: 'Booster' ,
        componentType: 'BS Quadrupole QD' ,
        inventoryId: 120,
        typeDescription: 'Quadrupole type QD for booster ring'  
    },
    {
        installId: 121,
        vendor: 'BINP, Russia' ,
        name: 'A2QD2' ,
        serialNumber: '4' ,
        system: 'Booster' ,
        componentType: 'BS Quadrupole QD' ,
        inventoryId: 121,
        typeDescription: 'Quadrupole type QD for booster ring'  
    },
    {
        installId: 122,
        vendor: 'BINP, Russia' ,
        name: 'A3QD1' ,
        serialNumber: '5' ,
        system: 'Booster' ,
        componentType: 'BS Quadrupole QD' ,
        inventoryId: 122,
        typeDescription: 'Quadrupole type QD for booster ring'  
    },
    {
        installId: 123,
        vendor: 'BINP, Russia' ,
        name: 'A3QD2' ,
        serialNumber: '6' ,
        system: 'Booster' ,
        componentType: 'BS Quadrupole QD' ,
        inventoryId: 123,
        typeDescription: 'Quadrupole type QD for booster ring'  
    },
    {
        installId: 124,
        vendor: 'BINP, Russia' ,
        name: 'A4QD1' ,
        serialNumber: '7' ,
        system: 'Booster' ,
        componentType: 'BS Quadrupole QD' ,
        inventoryId: 124,
        typeDescription: 'Quadrupole type QD for booster ring'  
    },
    {
        installId: 125,
        vendor: 'BINP, Russia' ,
        name: 'A4QD2' ,
        serialNumber: '8' ,
        system: 'Booster' ,
        componentType: 'BS Quadrupole QD' ,
        inventoryId: 125,
        typeDescription: 'Quadrupole type QD for booster ring'  
    },
    {
        installId: 126,
        vendor: 'BINP, Russia' ,
        name: 'A1QG1' ,
        serialNumber: '1' ,
        system: 'Booster' ,
        componentType: 'BS Quadrupole QG' ,
        inventoryId: 126,
        typeDescription: 'Quadrupole type QG for booster ring'  
    },
    {
        installId: 127,
        vendor: 'BINP, Russia' ,
        name: 'A1QG2' ,
        serialNumber: '2' ,
        system: 'Booster' ,
        componentType: 'BS Quadrupole QG' ,
        inventoryId: 127,
        typeDescription: 'Quadrupole type QG for booster ring'  
    },
    {
        installId: 128,
        vendor: 'BINP, Russia' ,
        name: 'A2QG1' ,
        serialNumber: '3' ,
        system: 'Booster' ,
        componentType: 'BS Quadrupole QG' ,
        inventoryId: 128,
        typeDescription: 'Quadrupole type QG for booster ring'  
    },
    {
        installId: 129,
        vendor: 'BINP, Russia' ,
        name: 'A2QG2' ,
        serialNumber: '4' ,
        system: 'Booster' ,
        componentType: 'BS Quadrupole QG' ,
        inventoryId: 129,
        typeDescription: 'Quadrupole type QG for booster ring'  
    },
    {
        installId: 130,
        vendor: 'BINP, Russia' ,
        name: 'A3QG1' ,
        serialNumber: '5' ,
        system: 'Booster' ,
        componentType: 'BS Quadrupole QG' ,
        inventoryId: 130,
        typeDescription: 'Quadrupole type QG for booster ring'  
    },
    {
        installId: 131,
        vendor: 'BINP, Russia' ,
        name: 'A3QG2' ,
        serialNumber: '6' ,
        system: 'Booster' ,
        componentType: 'BS Quadrupole QG' ,
        inventoryId: 131,
        typeDescription: 'Quadrupole type QG for booster ring'  
    },
    {
        installId: 132,
        vendor: 'BINP, Russia' ,
        name: 'A4QG1' ,
        serialNumber: '7' ,
        system: 'Booster' ,
        componentType: 'BS Quadrupole QG' ,
        inventoryId: 132,
        typeDescription: 'Quadrupole type QG for booster ring'  
    },
    {
        installId: 133,
        vendor: 'BINP, Russia' ,
        name: 'A4QG2' ,
        serialNumber: '8' ,
        system: 'Booster' ,
        componentType: 'BS Quadrupole QG' ,
        inventoryId: 133,
        typeDescription: 'Quadrupole type QG for booster ring'  
    },
    {
        installId: 134,
        vendor: 'BINP, Russia' ,
        name: 'A1SF1' ,
        serialNumber: '1' ,
        system: 'Booster' ,
        componentType: 'BS Sextupole SF' ,
        inventoryId: 134,
        typeDescription: 'Sextupole type SF for booster ring'  
    },
    {
        installId: 135,
        vendor: 'BINP, Russia' ,
        name: 'A1SF2' ,
        serialNumber: '2' ,
        system: 'Booster' ,
        componentType: 'BS Sextupole SF' ,
        inventoryId: 135,
        typeDescription: 'Sextupole type SF for booster ring'  
    },
    {
        installId: 136,
        vendor: 'BINP, Russia' ,
        name: 'A2SF1' ,
        serialNumber: '3' ,
        system: 'Booster' ,
        componentType: 'BS Sextupole SF' ,
        inventoryId: 136,
        typeDescription: 'Sextupole type SF for booster ring'  
    },
    {
        installId: 137,
        vendor: 'BINP, Russia' ,
        name: 'A2SF2' ,
        serialNumber: '4' ,
        system: 'Booster' ,
        componentType: 'BS Sextupole SF' ,
        inventoryId: 137,
        typeDescription: 'Sextupole type SF for booster ring'  
    },
    {
        installId: 138,
        vendor: 'BINP, Russia' ,
        name: 'A3SF1' ,
        serialNumber: '5' ,
        system: 'Booster' ,
        componentType: 'BS Sextupole SF' ,
        inventoryId: 138,
        typeDescription: 'Sextupole type SF for booster ring'  
    },
    {
        installId: 139,
        vendor: 'BINP, Russia' ,
        name: 'A3SF2' ,
        serialNumber: '6' ,
        system: 'Booster' ,
        componentType: 'BS Sextupole SF' ,
        inventoryId: 139,
        typeDescription: 'Sextupole type SF for booster ring'  
    },
    {
        installId: 140,
        vendor: 'BINP, Russia' ,
        name: 'A4SF1' ,
        serialNumber: '7' ,
        system: 'Booster' ,
        componentType: 'BS Sextupole SF' ,
        inventoryId: 140,
        typeDescription: 'Sextupole type SF for booster ring'  
    },
    {
        installId: 141,
        vendor: 'BINP, Russia' ,
        name: 'A4SF2' ,
        serialNumber: '8' ,
        system: 'Booster' ,
        componentType: 'BS Sextupole SF' ,
        inventoryId: 141,
        typeDescription: 'Sextupole type SF for booster ring'  
    },
    {
        installId: 142,
        vendor: 'BINP, Russia' ,
        name: 'A1SD1' ,
        serialNumber: '1' ,
        system: 'Booster' ,
        componentType: 'BS Sextupole SD' ,
        inventoryId: 142,
        typeDescription: 'Sextupole type SF for booster ring'  
    },
    {
        installId: 143,
        vendor: 'BINP, Russia' ,
        name: 'A1SD2' ,
        serialNumber: '2' ,
        system: 'Booster' ,
        componentType: 'BS Sextupole SD' ,
        inventoryId: 143,
        typeDescription: 'Sextupole type SF for booster ring'  
    },
    {
        installId: 144,
        vendor: 'BINP, Russia' ,
        name: 'A2SD1' ,
        serialNumber: '3' ,
        system: 'Booster' ,
        componentType: 'BS Sextupole SD' ,
        inventoryId: 144,
        typeDescription: 'Sextupole type SF for booster ring'  
    },
    {
        installId: 145,
        vendor: 'BINP, Russia' ,
        name: 'A2SD2' ,
        serialNumber: '4' ,
        system: 'Booster' ,
        componentType: 'BS Sextupole SD' ,
        inventoryId: 145,
        typeDescription: 'Sextupole type SF for booster ring'  
    },
    {
        installId: 146,
        vendor: 'BINP, Russia' ,
        name: 'A3SD1' ,
        serialNumber: '5' ,
        system: 'Booster' ,
        componentType: 'BS Sextupole SD' ,
        inventoryId: 146,
        typeDescription: 'Sextupole type SF for booster ring'  
    },
    {
        installId: 147,
        vendor: 'BINP, Russia' ,
        name: 'A3SD2' ,
        serialNumber: '6' ,
        system: 'Booster' ,
        componentType: 'BS Sextupole SD' ,
        inventoryId: 147,
        typeDescription: 'Sextupole type SF for booster ring'  
    },
    {
        installId: 148,
        vendor: 'BINP, Russia' ,
        name: 'A4SD1' ,
        serialNumber: '7' ,
        system: 'Booster' ,
        componentType: 'BS Sextupole SD' ,
        inventoryId: 148,
        typeDescription: 'Sextupole type SF for booster ring'  
    },
    {
        installId: 149,
        vendor: 'BINP, Russia' ,
        name: 'A4SD2' ,
        serialNumber: '8' ,
        system: 'Booster' ,
        componentType: 'BS Sextupole SD' ,
        inventoryId: 149,
        typeDescription: 'Sextupole type SF for booster ring'  
    },
    {
        installId: 150,
        vendor: 'Stangenes, USA' ,
        name: 'BS-B1' ,
        serialNumber: '2' ,
        system: 'BST' ,
        componentType: 'BST Dipole' ,
        inventoryId: 150,
        typeDescription: 'dipole magnet for linac to booster transport line'  
    },
    {
        installId: 151,
        vendor: 'Stangenes, USA' ,
        name: 'BS-B2' ,
        serialNumber: '1' ,
        system: 'BST' ,
        componentType: 'BST Dipole' ,
        inventoryId: 151,
        typeDescription: 'dipole magnet for linac to booster transport line'  
    },
    {
        installId: 152,
        vendor: 'Stangenes, USA' ,
        name: 'BS-B3' ,
        serialNumber: '3' ,
        system: 'BST' ,
        componentType: 'BST Dipole' ,
        inventoryId: 152,
        typeDescription: 'dipole magnet for linac to booster transport line'  
    },
    {
        installId: 153,
        vendor: 'Stangenes, USA' ,
        name: 'BS-B4' ,
        serialNumber: '4' ,
        system: 'BST' ,
        componentType: 'BST Dipole' ,
        inventoryId: 153,
        typeDescription: 'dipole magnet for linac to booster transport line'  
    },
    {
        installId: 154,
        vendor: 'Stangenes, USA' ,
        name: 'BS-Q1' ,
        serialNumber: '1' ,
        system: 'BST' ,
        componentType: 'BST Quadrupole 5200' ,
        inventoryId: 154,
        typeDescription: 'quadrupole magnet with 52mm aperture'  
    },
    {
        installId: 155,
        vendor: 'Stangenes, USA' ,
        name: 'BS-Q2' ,
        serialNumber: '2' ,
        system: 'BST' ,
        componentType: 'BST Quadrupole 5200' ,
        inventoryId: 155,
        typeDescription: 'quadrupole magnet with 52mm aperture'  
    },
    {
        installId: 156,
        vendor: 'Stangenes, USA' ,
        name: 'BS-Q3' ,
        serialNumber: '3' ,
        system: 'BST' ,
        componentType: 'BST Quadrupole 5200' ,
        inventoryId: 156,
        typeDescription: 'quadrupole magnet with 52mm aperture'  
    },
    {
        installId: 157,
        vendor: 'Stangenes, USA' ,
        name: 'BS-Q4' ,
        serialNumber: '4' ,
        system: 'BST' ,
        componentType: 'BST Quadrupole 5200' ,
        inventoryId: 157,
        typeDescription: 'quadrupole magnet with 52mm aperture'  
    },
    {
        installId: 158,
        vendor: 'Stangenes, USA' ,
        name: 'BS-Q5' ,
        serialNumber: '5' ,
        system: 'BST' ,
        componentType: 'BST Quadrupole 5200' ,
        inventoryId: 158,
        typeDescription: 'quadrupole magnet with 52mm aperture'  
    },
    {
        installId: 159,
        vendor: 'Stangenes, USA' ,
        name: 'BS-Q6' ,
        serialNumber: '6' ,
        system: 'BST' ,
        componentType: 'BST Quadrupole 5200' ,
        inventoryId: 159,
        typeDescription: 'quadrupole magnet with 52mm aperture'  
    },
    {
        installId: 160,
        vendor: 'Stangenes, USA' ,
        name: 'BS-Q7' ,
        serialNumber: '7' ,
        system: 'BST' ,
        componentType: 'BST Quadrupole 5200' ,
        inventoryId: 160,
        typeDescription: 'quadrupole magnet with 52mm aperture'  
    },
    {
        installId: 161,
        vendor: 'Stangenes, USA' ,
        name: 'BS-Q8' ,
        serialNumber: '10' ,
        system: 'BST' ,
        componentType: 'BST Quadrupole 5200' ,
        inventoryId: 161,
        typeDescription: 'quadrupole magnet with 52mm aperture'  
    },
    {
        installId: 162,
        vendor: 'Stangenes, USA' ,
        name: 'BS-Q9' ,
        serialNumber: '11' ,
        system: 'BST' ,
        componentType: 'BST Quadrupole 5200' ,
        inventoryId: 162,
        typeDescription: 'quadrupole magnet with 52mm aperture'  
    },
    {
        installId: 163,
        vendor: 'Stangenes, USA' ,
        name: 'BS-Q10' ,
        serialNumber: '12' ,
        system: 'BST' ,
        componentType: 'BST Quadrupole 5200' ,
        inventoryId: 163,
        typeDescription: 'quadrupole magnet with 52mm aperture'  
    },
    {
        installId: 164,
        vendor: 'Stangenes, USA' ,
        name: 'BS-Q11' ,
        serialNumber: '13' ,
        system: 'BST' ,
        componentType: 'BST Quadrupole 5200' ,
        inventoryId: 164,
        typeDescription: 'quadrupole magnet with 52mm aperture'  
    },
    {
        installId: 165,
        vendor: 'Stangenes, USA' ,
        name: 'BS-Q12' ,
        serialNumber: '14' ,
        system: 'BST' ,
        componentType: 'BST Quadrupole 5200' ,
        inventoryId: 165,
        typeDescription: 'quadrupole magnet with 52mm aperture'  
    },
    {
        installId: 166,
        vendor: 'Stangenes, USA' ,
        name: 'BS-Q13' ,
        serialNumber: '15' ,
        system: 'BST' ,
        componentType: 'BST Quadrupole 5200' ,
        inventoryId: 166,
        typeDescription: 'quadrupole magnet with 52mm aperture'  
    },
    {
        installId: 167,
        vendor: 'Stangenes, USA' ,
        name: 'BS-Q14' ,
        serialNumber: '16' ,
        system: 'BST' ,
        componentType: 'BST Quadrupole 5200' ,
        inventoryId: 167,
        typeDescription: 'quadrupole magnet with 52mm aperture'  
    },
    {
        installId: 168,
        vendor: 'Stangenes, USA' ,
        name: 'BS-Q1BD1' ,
        serialNumber: '8' ,
        system: 'BST' ,
        componentType: 'BST Quadrupole 5200' ,
        inventoryId: 168,
        typeDescription: 'quadrupole magnet with 52mm aperture'  
    },
    {
        installId: 169,
        vendor: 'Stangenes, USA' ,
        name: 'BS-Q2BD1' ,
        serialNumber: '9' ,
        system: 'BST' ,
        componentType: 'BST Quadrupole 5200' ,
        inventoryId: 169,
        typeDescription: 'quadrupole magnet with 52mm aperture'  
    },
    {
        installId: null,
        vendor: 'Everson-Tesla, USA' ,
        name: nl,
        serialNumber: '1' ,
        system: ll,
        componentType:  Corr C' ,
        inventoryId: 170,
        typeDescription:  100mm CORRECTOR'  
    },
    {
        installId: null,
        vendor: 'Everson-Tesla, USA' ,
        name: nl,
        serialNumber: '2' ,
        system: ll,
        componentType:  Corr C' ,
        inventoryId: 171,
        typeDescription:  100mm CORRECTOR'  
    },
    {
        installId: null,
        vendor: 'Everson-Tesla, USA' ,
        name: nl,
        serialNumber: '3' ,
        system: ll,
        componentType:  Corr C' ,
        inventoryId: 172,
        typeDescription:  100mm CORRECTOR'  
    },
    {
        installId: null,
        vendor: 'Everson-Tesla, USA' ,
        name: nl,
        serialNumber: '4' ,
        system: ll,
        componentType:  Corr C' ,
        inventoryId: 173,
        typeDescription:  100mm CORRECTOR'  
    },
    {
        installId: null,
        vendor: 'Everson-Tesla, USA' ,
        name: nl,
        serialNumber: '6' ,
        system: ll,
        componentType:  Corr C' ,
        inventoryId: 174,
        typeDescription:  100mm CORRECTOR'  
    },
    {
        installId: null,
        vendor: 'Everson-Tesla, USA' ,
        name: nl,
        serialNumber: '9' ,
        system: ll,
        componentType:  Corr C' ,
        inventoryId: 175,
        typeDescription:  100mm CORRECTOR'  
    },
    {
        installId: null,
        vendor: 'Everson-Tesla, USA' ,
        name: nl,
        serialNumber: '12' ,
        system: ll,
        componentType:  Corr C' ,
        inventoryId: 176,
        typeDescription:  100mm CORRECTOR'  
    },
    {
        installId: null,
        vendor: 'Everson-Tesla, USA' ,
        name: nl,
        serialNumber: '13' ,
        system: ll,
        componentType:  Corr C' ,
        inventoryId: 177,
        typeDescription:  100mm CORRECTOR'  
    },
    {
        installId: null,
        vendor: 'Everson-Tesla, USA' ,
        name: nl,
        serialNumber: '31' ,
        system: ll,
        componentType:  Corr C' ,
        inventoryId: 178,
        typeDescription:  100mm CORRECTOR'  
    },
    {
        installId: null,
        vendor: 'Everson-Tesla, USA' ,
        name: nl,
        serialNumber: '1' ,
        system: ll,
        componentType:  Corr D' ,
        inventoryId: 179,
        typeDescription:  100mm SKEWED CORRECTOR'  
    },
    {
        installId: null,
        vendor: 'Everson-Tesla, USA' ,
        name: nl,
        serialNumber: '2' ,
        system: ll,
        componentType:  Corr D' ,
        inventoryId: 180,
        typeDescription:  100mm SKEWED CORRECTOR'  
    },
    {
        installId: null,
        vendor: 'Everson-Tesla, USA' ,
        name: nl,
        serialNumber: '3' ,
        system: ll,
        componentType:  Corr D' ,
        inventoryId: 181,
        typeDescription:  100mm SKEWED CORRECTOR'  
    },
    {
        installId: null,
        vendor: 'Everson-Tesla, USA' ,
        name: nl,
        serialNumber: '4' ,
        system: ll,
        componentType:  Corr D' ,
        inventoryId: 182,
        typeDescription:  100mm SKEWED CORRECTOR'  
    },
    {
        installId: null,
        vendor: 'Everson-Tesla, USA' ,
        name: nl,
        serialNumber: '5' ,
        system: ll,
        componentType:  Corr D' ,
        inventoryId: 183,
        typeDescription:  100mm SKEWED CORRECTOR'  
    },
    {
        installId: null,
        vendor: 'Everson-Tesla, USA' ,
        name: nl,
        serialNumber: '6' ,
        system: ll,
        componentType:  Corr D' ,
        inventoryId: 184,
        typeDescription:  100mm SKEWED CORRECTOR'  
    },
    {
        installId: null,
        vendor: 'Everson-Tesla, USA' ,
        name: nl,
        serialNumber: '7' ,
        system: ll,
        componentType:  Corr D' ,
        inventoryId: 185,
        typeDescription:  100mm SKEWED CORRECTOR'  
    },
    {
        installId: null,
        vendor: 'Everson-Tesla, USA' ,
        name: nl,
        serialNumber: '8' ,
        system: ll,
        componentType:  Corr D' ,
        inventoryId: 186,
        typeDescription:  100mm SKEWED CORRECTOR'  
    },
    {
        installId: null,
        vendor: 'Everson-Tesla, USA' ,
        name: nl,
        serialNumber: '9' ,
        system: ll,
        componentType:  Corr D' ,
        inventoryId: 187,
        typeDescription:  100mm SKEWED CORRECTOR'  
    },
    {
        installId: null,
        vendor: 'Everson-Tesla, USA' ,
        name: nl,
        serialNumber: '10' ,
        system: ll,
        componentType:  Corr D' ,
        inventoryId: 188,
        typeDescription:  100mm SKEWED CORRECTOR'  
    },
    {
        installId: null,
        vendor: 'Everson-Tesla, USA' ,
        name: nl,
        serialNumber: '11' ,
        system: ll,
        componentType:  Corr D' ,
        inventoryId: 189,
        typeDescription:  100mm SKEWED CORRECTOR'  
    },
    {
        installId: null,
        vendor: 'Everson-Tesla, USA' ,
        name: nl,
        serialNumber: '12' ,
        system: ll,
        componentType:  Corr D' ,
        inventoryId: 190,
        typeDescription:  100mm SKEWED CORRECTOR'  
    },
    {
        installId: null,
        vendor: 'Everson-Tesla, USA' ,
        name: nl,
        serialNumber: '13' ,
        system: ll,
        componentType:  Corr D' ,
        inventoryId: 191,
        typeDescription:  100mm SKEWED CORRECTOR'  
    },
    {
        installId: null,
        vendor: 'Everson-Tesla, USA' ,
        name: nl,
        serialNumber: '14' ,
        system: ll,
        componentType:  Corr D' ,
        inventoryId: 192,
        typeDescription:  100mm SKEWED CORRECTOR'  
    },
    {
        installId: null,
        vendor: 'Everson-Tesla, USA' ,
        name: nl,
        serialNumber: '15' ,
        system: ll,
        componentType:  Corr D' ,
        inventoryId: 193,
        typeDescription:  100mm SKEWED CORRECTOR'  
    },
    {
        installId: null,
        vendor: 'Everson-Tesla, USA' ,
        name: nl,
        serialNumber: '16' ,
        system: ll,
        componentType:  Corr D' ,
        inventoryId: 194,
        typeDescription:  100mm SKEWED CORRECTOR'  
    },
    {
        installId: null,
        vendor: 'Everson-Tesla, USA' ,
        name: nl,
        serialNumber: '17' ,
        system: ll,
        componentType:  Corr D' ,
        inventoryId: 195,
        typeDescription:  100mm SKEWED CORRECTOR'  
    },
    {
        installId: null,
        vendor: 'Everson-Tesla, USA' ,
        name: nl,
        serialNumber: '18' ,
        system: ll,
        componentType:  Corr D' ,
        inventoryId: 196,
        typeDescription:  100mm SKEWED CORRECTOR'  
    },
    {
        installId: null,
        vendor: 'Everson-Tesla, USA' ,
        name: nl,
        serialNumber: '19' ,
        system: ll,
        componentType:  Corr D' ,
        inventoryId: 197,
        typeDescription:  100mm SKEWED CORRECTOR'  
    },
    {
        installId: null,
        vendor: 'Everson-Tesla, USA' ,
        name: nl,
        serialNumber: '20' ,
        system: ll,
        componentType:  Corr D' ,
        inventoryId: 198,
        typeDescription:  100mm SKEWED CORRECTOR'  
    },
    {
        installId: null,
        vendor: 'Everson-Tesla, USA' ,
        name: nl,
        serialNumber: '21' ,
        system: ll,
        componentType:  Corr D' ,
        inventoryId: 199,
        typeDescription:  100mm SKEWED CORRECTOR'  
    },
    {
        installId: null,
        vendor: 'Everson-Tesla, USA' ,
        name: nl,
        serialNumber: '22' ,
        system: ll,
        componentType:  Corr D' ,
        inventoryId: 200,
        typeDescription:  100mm SKEWED CORRECTOR'  
    },
    {
        installId: null,
        vendor: 'Everson-Tesla, USA' ,
        name: nl,
        serialNumber: '23' ,
        system: ll,
        componentType:  Corr D' ,
        inventoryId: 201,
        typeDescription:  100mm SKEWED CORRECTOR'  
    },
    {
        installId: null,
        vendor: 'Everson-Tesla, USA' ,
        name: nl,
        serialNumber: '24' ,
        system: ll,
        componentType:  Corr D' ,
        inventoryId: 202,
        typeDescription:  100mm SKEWED CORRECTOR'  
    },
    {
        installId: null,
        vendor: 'Everson-Tesla, USA' ,
        name: nl,
        serialNumber: '25' ,
        system: ll,
        componentType:  Corr D' ,
        inventoryId: 203,
        typeDescription:  100mm SKEWED CORRECTOR'  
    },
    {
        installId: null,
        vendor: 'Everson-Tesla, USA' ,
        name: nl,
        serialNumber: '26' ,
        system: ll,
        componentType:  Corr D' ,
        inventoryId: 204,
        typeDescription:  100mm SKEWED CORRECTOR'  
    },
    {
        installId: null,
        vendor: 'Everson-Tesla, USA' ,
        name: nl,
        serialNumber: '27' ,
        system: ll,
        componentType:  Corr D' ,
        inventoryId: 205,
        typeDescription:  100mm SKEWED CORRECTOR'  
    },
    {
        installId: null,
        vendor: 'Everson-Tesla, USA' ,
        name: nl,
        serialNumber: '28' ,
        system: ll,
        componentType:  Corr D' ,
        inventoryId: 206,
        typeDescription:  100mm SKEWED CORRECTOR'  
    },
    {
        installId: null,
        vendor: 'Everson-Tesla, USA' ,
        name: nl,
        serialNumber: '29' ,
        system: ll,
        componentType:  Corr D' ,
        inventoryId: 207,
        typeDescription:  100mm SKEWED CORRECTOR'  
    },
    {
        installId: null,
        vendor: 'Everson-Tesla, USA' ,
        name: nl,
        serialNumber: '30' ,
        system: ll,
        componentType:  Corr D' ,
        inventoryId: 208,
        typeDescription:  100mm SKEWED CORRECTOR'  
    },
    {
        installId: null,
        vendor: 'Everson-Tesla, USA' ,
        name: nl,
        serialNumber: '3' ,
        system: ll,
        componentType:  Corr A' ,
        inventoryId: 209,
        typeDescription:  156mm CORRECTOR'  
    },
    {
        installId: 909,
        vendor: 'BINP, Russia' ,
        name: 'QM1G4C24B' ,
        serialNumber: '1' ,
        system: 'Storage Ring' ,
        componentType: 'Quad A' ,
        inventoryId: 210,
        typeDescription: '66mm, SNGL COIL, SHORT QUAD'  
    },
    {
        installId: 939,
        vendor: 'BINP, Russia' ,
        name: 'QM1G4C25B' ,
        serialNumber: '2' ,
        system: 'Storage Ring' ,
        componentType: 'Quad A' ,
        inventoryId: 211,
        typeDescription: '66mm, SNGL COIL, SHORT QUAD'  
    },
    {
        installId: 969,
        vendor: 'BINP, Russia' ,
        name: 'QM1G4C26B' ,
        serialNumber: '3' ,
        system: 'Storage Ring' ,
        componentType: 'Quad A' ,
        inventoryId: 212,
        typeDescription: '66mm, SNGL COIL, SHORT QUAD'  
    },
    {
        installId: 1059,
        vendor: 'BINP, Russia' ,
        name: 'QM1G4C29B' ,
        serialNumber: '4' ,
        system: 'Storage Ring' ,
        componentType: 'Quad A' ,
        inventoryId: 213,
        typeDescription: '66mm, SNGL COIL, SHORT QUAD'  
    },
    {
        installId: 279,
        vendor: 'BINP, Russia' ,
        name: 'QM1G4C03B' ,
        serialNumber: '5' ,
        system: 'Storage Ring' ,
        componentType: 'Quad A' ,
        inventoryId: 214,
        typeDescription: '66mm, SNGL COIL, SHORT QUAD'  
    },
    {
        installId: 639,
        vendor: 'BINP, Russia' ,
        name: 'QM1G4C15B' ,
        serialNumber: '6' ,
        system: 'Storage Ring' ,
        componentType: 'Quad A' ,
        inventoryId: 215,
        typeDescription: '66mm, SNGL COIL, SHORT QUAD'  
    },
    {
        installId: 429,
        vendor: 'BINP, Russia' ,
        name: 'QM1G4C08B' ,
        serialNumber: '7' ,
        system: 'Storage Ring' ,
        componentType: 'Quad A' ,
        inventoryId: 216,
        typeDescription: '66mm, SNGL COIL, SHORT QUAD'  
    },
    {
        installId: 339,
        vendor: 'BINP, Russia' ,
        name: 'QM1G4C05B' ,
        serialNumber: '8' ,
        system: 'Storage Ring' ,
        componentType: 'Quad A' ,
        inventoryId: 217,
        typeDescription: '66mm, SNGL COIL, SHORT QUAD'  
    },
    {
        installId: 249,
        vendor: 'BINP, Russia' ,
        name: 'QM1G4C02B' ,
        serialNumber: '9' ,
        system: 'Storage Ring' ,
        componentType: 'Quad A' ,
        inventoryId: 218,
        typeDescription: '66mm, SNGL COIL, SHORT QUAD'  
    },
    {
        installId: 309,
        vendor: 'BINP, Russia' ,
        name: 'QM1G4C04B' ,
        serialNumber: '10' ,
        system: 'Storage Ring' ,
        componentType: 'Quad A' ,
        inventoryId: 219,
        typeDescription: '66mm, SNGL COIL, SHORT QUAD'  
    },
    {
        installId: 369,
        vendor: 'BINP, Russia' ,
        name: 'QM1G4C06B' ,
        serialNumber: '11' ,
        system: 'Storage Ring' ,
        componentType: 'Quad A' ,
        inventoryId: 220,
        typeDescription: '66mm, SNGL COIL, SHORT QUAD'  
    },
    {
        installId: 489,
        vendor: 'BINP, Russia' ,
        name: 'QM1G4C10B' ,
        serialNumber: '12' ,
        system: 'Storage Ring' ,
        componentType: 'Quad A' ,
        inventoryId: 221,
        typeDescription: '66mm, SNGL COIL, SHORT QUAD'  
    },
    {
        installId: 609,
        vendor: 'BINP, Russia' ,
        name: 'QM1G4C14B' ,
        serialNumber: '13' ,
        system: 'Storage Ring' ,
        componentType: 'Quad A' ,
        inventoryId: 222,
        typeDescription: '66mm, SNGL COIL, SHORT QUAD'  
    },
    {
        installId: 459,
        vendor: 'BINP, Russia' ,
        name: 'QM1G4C09B' ,
        serialNumber: '14' ,
        system: 'Storage Ring' ,
        componentType: 'Quad A' ,
        inventoryId: 223,
        typeDescription: '66mm, SNGL COIL, SHORT QUAD'  
    },
    {
        installId: 519,
        vendor: 'BINP, Russia' ,
        name: 'QM1G4C11B' ,
        serialNumber: '15' ,
        system: 'Storage Ring' ,
        componentType: 'Quad A' ,
        inventoryId: 224,
        typeDescription: '66mm, SNGL COIL, SHORT QUAD'  
    },
    {
        installId: 219,
        vendor: 'BINP, Russia' ,
        name: 'QM1G4C01B' ,
        serialNumber: '16' ,
        system: 'Storage Ring' ,
        componentType: 'Quad A' ,
        inventoryId: 225,
        typeDescription: '66mm, SNGL COIL, SHORT QUAD'  
    },
    {
        installId: 669,
        vendor: 'BINP, Russia' ,
        name: 'QM1G4C16B' ,
        serialNumber: '17' ,
        system: 'Storage Ring' ,
        componentType: 'Quad A' ,
        inventoryId: 226,
        typeDescription: '66mm, SNGL COIL, SHORT QUAD'  
    },
    {
        installId: 879,
        vendor: 'BINP, Russia' ,
        name: 'QM1G4C23B' ,
        serialNumber: '18' ,
        system: 'Storage Ring' ,
        componentType: 'Quad A' ,
        inventoryId: 227,
        typeDescription: '66mm, SNGL COIL, SHORT QUAD'  
    },
    {
        installId: 729,
        vendor: 'BINP, Russia' ,
        name: 'QM1G4C18B' ,
        serialNumber: '19' ,
        system: 'Storage Ring' ,
        componentType: 'Quad A' ,
        inventoryId: 228,
        typeDescription: '66mm, SNGL COIL, SHORT QUAD'  
    },
    {
        installId: 999,
        vendor: 'BINP, Russia' ,
        name: 'QM1G4C27B' ,
        serialNumber: '20' ,
        system: 'Storage Ring' ,
        componentType: 'Quad A' ,
        inventoryId: 229,
        typeDescription: '66mm, SNGL COIL, SHORT QUAD'  
    },
    {
        installId: 399,
        vendor: 'BINP, Russia' ,
        name: 'QM1G4C07B' ,
        serialNumber: '21' ,
        system: 'Storage Ring' ,
        componentType: 'Quad A' ,
        inventoryId: 230,
        typeDescription: '66mm, SNGL COIL, SHORT QUAD'  
    },
    {
        installId: 579,
        vendor: 'BINP, Russia' ,
        name: 'QM1G4C13B' ,
        serialNumber: '22' ,
        system: 'Storage Ring' ,
        componentType: 'Quad A' ,
        inventoryId: 231,
        typeDescription: '66mm, SNGL COIL, SHORT QUAD'  
    },
    {
        installId: 189,
        vendor: 'BINP, Russia' ,
        name: 'QM1G4C30B' ,
        serialNumber: '23' ,
        system: 'Storage Ring' ,
        componentType: 'Quad A' ,
        inventoryId: 232,
        typeDescription: '66mm, SNGL COIL, SHORT QUAD'  
    },
    {
        installId: 549,
        vendor: 'BINP, Russia' ,
        name: 'QM1G4C12B' ,
        serialNumber: '24' ,
        system: 'Storage Ring' ,
        componentType: 'Quad A' ,
        inventoryId: 233,
        typeDescription: '66mm, SNGL COIL, SHORT QUAD'  
    },
    {
        installId: 789,
        vendor: 'BINP, Russia' ,
        name: 'QM1G4C20B' ,
        serialNumber: '25' ,
        system: 'Storage Ring' ,
        componentType: 'Quad A' ,
        inventoryId: 234,
        typeDescription: '66mm, SNGL COIL, SHORT QUAD'  
    },
    {
        installId: 1029,
        vendor: 'BINP, Russia' ,
        name: 'QM1G4C28B' ,
        serialNumber: '26' ,
        system: 'Storage Ring' ,
        componentType: 'Quad A' ,
        inventoryId: 235,
        typeDescription: '66mm, SNGL COIL, SHORT QUAD'  
    },
    {
        installId: 759,
        vendor: 'BINP, Russia' ,
        name: 'QM1G4C19B' ,
        serialNumber: '27' ,
        system: 'Storage Ring' ,
        componentType: 'Quad A' ,
        inventoryId: 236,
        typeDescription: '66mm, SNGL COIL, SHORT QUAD'  
    },
    {
        installId: 849,
        vendor: 'BINP, Russia' ,
        name: 'QM1G4C22B' ,
        serialNumber: '28' ,
        system: 'Storage Ring' ,
        componentType: 'Quad A' ,
        inventoryId: 237,
        typeDescription: '66mm, SNGL COIL, SHORT QUAD'  
    },
    {
        installId: 699,
        vendor: 'BINP, Russia' ,
        name: 'QM1G4C17B' ,
        serialNumber: '29' ,
        system: 'Storage Ring' ,
        componentType: 'Quad A' ,
        inventoryId: 238,
        typeDescription: '66mm, SNGL COIL, SHORT QUAD'  
    },
    {
        installId: 819,
        vendor: 'BINP, Russia' ,
        name: 'QM1G4C21B' ,
        serialNumber: '30' ,
        system: 'Storage Ring' ,
        componentType: 'Quad A' ,
        inventoryId: 239,
        typeDescription: '66mm, SNGL COIL, SHORT QUAD'  
    },
    {
        installId: 446,
        vendor: 'BINP, Russia' ,
        name: 'QL2G2C09A' ,
        serialNumber: '1' ,
        system: 'Storage Ring' ,
        componentType: 'Quad C' ,
        inventoryId: 240,
        typeDescription: '66mm, DBL COIL, LONG QUAD'  
    },
    {
        installId: 926,
        vendor: 'BINP, Russia' ,
        name: 'QL2G2C25A' ,
        serialNumber: '2' ,
        system: 'Storage Ring' ,
        componentType: 'Quad C' ,
        inventoryId: 241,
        typeDescription: '66mm, DBL COIL, LONG QUAD'  
    },
    {
        installId: 986,
        vendor: 'BINP, Russia' ,
        name: 'QL2G2C27A' ,
        serialNumber: '3' ,
        system: 'Storage Ring' ,
        componentType: 'Quad C' ,
        inventoryId: 242,
        typeDescription: '66mm, DBL COIL, LONG QUAD'  
    },
    {
        installId: 955,
        vendor: 'BINP, Russia' ,
        name: 'QH2G2C26A' ,
        serialNumber: '4' ,
        system: 'Storage Ring' ,
        componentType: 'Quad C' ,
        inventoryId: 243,
        typeDescription: '66mm, DBL COIL, LONG QUAD'  
    },
    {
        installId: 1046,
        vendor: 'BINP, Russia' ,
        name: 'QL2G2C29A' ,
        serialNumber: '5' ,
        system: 'Storage Ring' ,
        componentType: 'Quad C' ,
        inventoryId: 244,
        typeDescription: '66mm, DBL COIL, LONG QUAD'  
    },
    {
        installId: 355,
        vendor: 'BINP, Russia' ,
        name: 'QH2G2C06A' ,
        serialNumber: '6' ,
        system: 'Storage Ring' ,
        componentType: 'Quad C' ,
        inventoryId: 245,
        typeDescription: '66mm, DBL COIL, LONG QUAD'  
    },
    {
        installId: 235,
        vendor: 'BINP, Russia' ,
        name: 'QH2G2C02A' ,
        serialNumber: '7' ,
        system: 'Storage Ring' ,
        componentType: 'Quad C' ,
        inventoryId: 246,
        typeDescription: '66mm, DBL COIL, LONG QUAD'  
    },
    {
        installId: 206,
        vendor: 'BINP, Russia' ,
        name: 'QL2G2C01A' ,
        serialNumber: '8' ,
        system: 'Storage Ring' ,
        componentType: 'Quad C' ,
        inventoryId: 247,
        typeDescription: '66mm, DBL COIL, LONG QUAD'  
    },
    {
        installId: 506,
        vendor: 'BINP, Russia' ,
        name: 'QL2G2C11A' ,
        serialNumber: '9' ,
        system: 'Storage Ring' ,
        componentType: 'Quad C' ,
        inventoryId: 248,
        typeDescription: '66mm, DBL COIL, LONG QUAD'  
    },
    {
        installId: 1015,
        vendor: 'BINP, Russia' ,
        name: 'QH2G2C28A' ,
        serialNumber: '10' ,
        system: 'Storage Ring' ,
        componentType: 'Quad C' ,
        inventoryId: 249,
        typeDescription: '66mm, DBL COIL, LONG QUAD'  
    },
    {
        installId: 566,
        vendor: 'BINP, Russia' ,
        name: 'QL2G2C13A' ,
        serialNumber: '11' ,
        system: 'Storage Ring' ,
        componentType: 'Quad C' ,
        inventoryId: 250,
        typeDescription: '66mm, DBL COIL, LONG QUAD'  
    },
    {
        installId: 686,
        vendor: 'BINP, Russia' ,
        name: 'QL2G2C17A' ,
        serialNumber: '12' ,
        system: 'Storage Ring' ,
        componentType: 'Quad C' ,
        inventoryId: 251,
        typeDescription: '66mm, DBL COIL, LONG QUAD'  
    },
    {
        installId: 715,
        vendor: 'BINP, Russia' ,
        name: 'QH2G2C18A' ,
        serialNumber: '13' ,
        system: 'Storage Ring' ,
        componentType: 'Quad C' ,
        inventoryId: 252,
        typeDescription: '66mm, DBL COIL, LONG QUAD'  
    },
    {
        installId: 595,
        vendor: 'BINP, Russia' ,
        name: 'QH2G2C14A' ,
        serialNumber: '14' ,
        system: 'Storage Ring' ,
        componentType: 'Quad C' ,
        inventoryId: 253,
        typeDescription: '66mm, DBL COIL, LONG QUAD'  
    },
    {
        installId: 806,
        vendor: 'BINP, Russia' ,
        name: 'QL2G2C21A' ,
        serialNumber: '15' ,
        system: 'Storage Ring' ,
        componentType: 'Quad C' ,
        inventoryId: 254,
        typeDescription: '66mm, DBL COIL, LONG QUAD'  
    },
    {
        installId: 866,
        vendor: 'BINP, Russia' ,
        name: 'QL2G2C23A' ,
        serialNumber: '16' ,
        system: 'Storage Ring' ,
        componentType: 'Quad C' ,
        inventoryId: 255,
        typeDescription: '66mm, DBL COIL, LONG QUAD'  
    },
    {
        installId: 626,
        vendor: 'BINP, Russia' ,
        name: 'QL2G2C15A' ,
        serialNumber: '17' ,
        system: 'Storage Ring' ,
        componentType: 'Quad C' ,
        inventoryId: 256,
        typeDescription: '66mm, DBL COIL, LONG QUAD'  
    },
    {
        installId: 655,
        vendor: 'BINP, Russia' ,
        name: 'QH2G2C16A' ,
        serialNumber: '18' ,
        system: 'Storage Ring' ,
        componentType: 'Quad C' ,
        inventoryId: 257,
        typeDescription: '66mm, DBL COIL, LONG QUAD'  
    },
    {
        installId: 775,
        vendor: 'BINP, Russia' ,
        name: 'QH2G2C20A' ,
        serialNumber: '19' ,
        system: 'Storage Ring' ,
        componentType: 'Quad C' ,
        inventoryId: 258,
        typeDescription: '66mm, DBL COIL, LONG QUAD'  
    },
    {
        installId: 475,
        vendor: 'BINP, Russia' ,
        name: 'QH2G2C10A' ,
        serialNumber: '20' ,
        system: 'Storage Ring' ,
        componentType: 'Quad C' ,
        inventoryId: 259,
        typeDescription: '66mm, DBL COIL, LONG QUAD'  
    },
    {
        installId: 175,
        vendor: 'BINP, Russia' ,
        name: 'QH2G2C30A' ,
        serialNumber: '21' ,
        system: 'Storage Ring' ,
        componentType: 'Quad C' ,
        inventoryId: 260,
        typeDescription: '66mm, DBL COIL, LONG QUAD'  
    },
    {
        installId: 266,
        vendor: 'BINP, Russia' ,
        name: 'QL2G2C03A' ,
        serialNumber: '22' ,
        system: 'Storage Ring' ,
        componentType: 'Quad C' ,
        inventoryId: 261,
        typeDescription: '66mm, DBL COIL, LONG QUAD'  
    },
    {
        installId: 415,
        vendor: 'BINP, Russia' ,
        name: 'QH2G2C08A' ,
        serialNumber: '23' ,
        system: 'Storage Ring' ,
        componentType: 'Quad C' ,
        inventoryId: 262,
        typeDescription: '66mm, DBL COIL, LONG QUAD'  
    },
    {
        installId: 746,
        vendor: 'BINP, Russia' ,
        name: 'QL2G2C19A' ,
        serialNumber: '24' ,
        system: 'Storage Ring' ,
        componentType: 'Quad C' ,
        inventoryId: 263,
        typeDescription: '66mm, DBL COIL, LONG QUAD'  
    },
    {
        installId: 895,
        vendor: 'BINP, Russia' ,
        name: 'QH2G2C24A' ,
        serialNumber: '25' ,
        system: 'Storage Ring' ,
        componentType: 'Quad C' ,
        inventoryId: 264,
        typeDescription: '66mm, DBL COIL, LONG QUAD'  
    },
    {
        installId: 386,
        vendor: 'BINP, Russia' ,
        name: 'QL2G2C07A' ,
        serialNumber: '26' ,
        system: 'Storage Ring' ,
        componentType: 'Quad C' ,
        inventoryId: 265,
        typeDescription: '66mm, DBL COIL, LONG QUAD'  
    },
    {
        installId: 326,
        vendor: 'BINP, Russia' ,
        name: 'QL2G2C05A' ,
        serialNumber: '27' ,
        system: 'Storage Ring' ,
        componentType: 'Quad C' ,
        inventoryId: 266,
        typeDescription: '66mm, DBL COIL, LONG QUAD'  
    },
    {
        installId: 535,
        vendor: 'BINP, Russia' ,
        name: 'QH2G2C12A' ,
        serialNumber: '28' ,
        system: 'Storage Ring' ,
        componentType: 'Quad C' ,
        inventoryId: 267,
        typeDescription: '66mm, DBL COIL, LONG QUAD'  
    },
    {
        installId: 295,
        vendor: 'BINP, Russia' ,
        name: 'QH2G2C04A' ,
        serialNumber: '29' ,
        system: 'Storage Ring' ,
        componentType: 'Quad C' ,
        inventoryId: 268,
        typeDescription: '66mm, DBL COIL, LONG QUAD'  
    },
    {
        installId: 835,
        vendor: 'BINP, Russia' ,
        name: 'QH2G2C22A' ,
        serialNumber: '30' ,
        system: 'Storage Ring' ,
        componentType: 'Quad C' ,
        inventoryId: 269,
        typeDescription: '66mm, DBL COIL, LONG QUAD'  
    },
    {
        installId: 706,
        vendor: 'BINP, Russia' ,
        name: 'QH2G6C17B' ,
        serialNumber: '2' ,
        system: 'Storage Ring' ,
        componentType: 'Quad Cp' ,
        inventoryId: 270,
        typeDescription: '66mm, LONG, DBL COIL KINKED QUAD'  
    },
    {
        installId: 915,
        vendor: 'BINP, Russia' ,
        name: 'QL2G6C24B' ,
        serialNumber: '3' ,
        system: 'Storage Ring' ,
        componentType: 'Quad Cp' ,
        inventoryId: 271,
        typeDescription: '66mm, LONG, DBL COIL KINKED QUAD'  
    },
    {
        installId: 975,
        vendor: 'BINP, Russia' ,
        name: 'QL2G6C26B' ,
        serialNumber: '4' ,
        system: 'Storage Ring' ,
        componentType: 'Quad Cp' ,
        inventoryId: 272,
        typeDescription: '66mm, LONG, DBL COIL KINKED QUAD'  
    },
    {
        installId: 946,
        vendor: 'BINP, Russia' ,
        name: 'QH2G6C25B' ,
        serialNumber: '5' ,
        system: 'Storage Ring' ,
        componentType: 'Quad Cp' ,
        inventoryId: 273,
        typeDescription: '66mm, LONG, DBL COIL KINKED QUAD'  
    },
    {
        installId: 1035,
        vendor: 'BINP, Russia' ,
        name: 'QL2G6C28B' ,
        serialNumber: '6' ,
        system: 'Storage Ring' ,
        componentType: 'Quad Cp' ,
        inventoryId: 274,
        typeDescription: '66mm, LONG, DBL COIL KINKED QUAD'  
    },
    {
        installId: 1066,
        vendor: 'BINP, Russia' ,
        name: 'QH2G6C29B' ,
        serialNumber: '7' ,
        system: 'Storage Ring' ,
        componentType: 'Quad Cp' ,
        inventoryId: 275,
        typeDescription: '66mm, LONG, DBL COIL KINKED QUAD'  
    },
    {
        installId: 466,
        vendor: 'BINP, Russia' ,
        name: 'QH2G6C09B' ,
        serialNumber: '8' ,
        system: 'Storage Ring' ,
        componentType: 'Quad Cp' ,
        inventoryId: 276,
        typeDescription: '66mm, LONG, DBL COIL KINKED QUAD'  
    },
    {
        installId: 375,
        vendor: 'BINP, Russia' ,
        name: 'QL2G6C06B' ,
        serialNumber: '9' ,
        system: 'Storage Ring' ,
        componentType: 'Quad Cp' ,
        inventoryId: 277,
        typeDescription: '66mm, LONG, DBL COIL KINKED QUAD'  
    },
    {
        installId: 315,
        vendor: 'BINP, Russia' ,
        name: 'QL2G6C04B' ,
        serialNumber: '10' ,
        system: 'Storage Ring' ,
        componentType: 'Quad Cp' ,
        inventoryId: 278,
        typeDescription: '66mm, LONG, DBL COIL KINKED QUAD'  
    },
    {
        installId: 495,
        vendor: 'BINP, Russia' ,
        name: 'QL2G6C10B' ,
        serialNumber: '11' ,
        system: 'Storage Ring' ,
        componentType: 'Quad Cp' ,
        inventoryId: 279,
        typeDescription: '66mm, LONG, DBL COIL KINKED QUAD'  
    },
    {
        installId: 886,
        vendor: 'BINP, Russia' ,
        name: 'QH2G6C23B' ,
        serialNumber: '12' ,
        system: 'Storage Ring' ,
        componentType: 'Quad Cp' ,
        inventoryId: 280,
        typeDescription: '66mm, LONG, DBL COIL KINKED QUAD'  
    },
    {
        installId: 855,
        vendor: 'BINP, Russia' ,
        name: 'QL2G6C22B' ,
        serialNumber: '13' ,
        system: 'Storage Ring' ,
        componentType: 'Quad Cp' ,
        inventoryId: 281,
        typeDescription: '66mm, LONG, DBL COIL KINKED QUAD'  
    },
    {
        installId: 1006,
        vendor: 'BINP, Russia' ,
        name: 'QH2G6C27B' ,
        serialNumber: '14' ,
        system: 'Storage Ring' ,
        componentType: 'Quad Cp' ,
        inventoryId: 282,
        typeDescription: '66mm, LONG, DBL COIL KINKED QUAD'  
    },
    {
        installId: 255,
        vendor: 'BINP, Russia' ,
        name: 'QL2G6C02B' ,
        serialNumber: '15' ,
        system: 'Storage Ring' ,
        componentType: 'Quad Cp' ,
        inventoryId: 283,
        typeDescription: '66mm, LONG, DBL COIL KINKED QUAD'  
    },
    {
        installId: 766,
        vendor: 'BINP, Russia' ,
        name: 'QH2G6C19B' ,
        serialNumber: '16' ,
        system: 'Storage Ring' ,
        componentType: 'Quad Cp' ,
        inventoryId: 284,
        typeDescription: '66mm, LONG, DBL COIL KINKED QUAD'  
    },
    {
        installId: 226,
        vendor: 'BINP, Russia' ,
        name: 'QH2G6C01B' ,
        serialNumber: '17' ,
        system: 'Storage Ring' ,
        componentType: 'Quad Cp' ,
        inventoryId: 285,
        typeDescription: '66mm, LONG, DBL COIL KINKED QUAD'  
    },
    {
        installId: 195,
        vendor: 'BINP, Russia' ,
        name: 'QL2G6C30B' ,
        serialNumber: '18' ,
        system: 'Storage Ring' ,
        componentType: 'Quad Cp' ,
        inventoryId: 286,
        typeDescription: '66mm, LONG, DBL COIL KINKED QUAD'  
    },
    {
        installId: 346,
        vendor: 'BINP, Russia' ,
        name: 'QH2G6C05B' ,
        serialNumber: '19' ,
        system: 'Storage Ring' ,
        componentType: 'Quad Cp' ,
        inventoryId: 287,
        typeDescription: '66mm, LONG, DBL COIL KINKED QUAD'  
    },
    {
        installId: 435,
        vendor: 'BINP, Russia' ,
        name: 'QL2G6C08B' ,
        serialNumber: '20' ,
        system: 'Storage Ring' ,
        componentType: 'Quad Cp' ,
        inventoryId: 288,
        typeDescription: '66mm, LONG, DBL COIL KINKED QUAD'  
    },
    {
        installId: 286,
        vendor: 'BINP, Russia' ,
        name: 'QH2G6C03B' ,
        serialNumber: '21' ,
        system: 'Storage Ring' ,
        componentType: 'Quad Cp' ,
        inventoryId: 289,
        typeDescription: '66mm, LONG, DBL COIL KINKED QUAD'  
    },
    {
        installId: 406,
        vendor: 'BINP, Russia' ,
        name: 'QH2G6C07B' ,
        serialNumber: '22' ,
        system: 'Storage Ring' ,
        componentType: 'Quad Cp' ,
        inventoryId: 290,
        typeDescription: '66mm, LONG, DBL COIL KINKED QUAD'  
    },
    {
        installId: 555,
        vendor: 'BINP, Russia' ,
        name: 'QL2G6C12B' ,
        serialNumber: '23' ,
        system: 'Storage Ring' ,
        componentType: 'Quad Cp' ,
        inventoryId: 291,
        typeDescription: '66mm, LONG, DBL COIL KINKED QUAD'  
    },
    {
        installId: 526,
        vendor: 'BINP, Russia' ,
        name: 'QH2G6C11B' ,
        serialNumber: '24' ,
        system: 'Storage Ring' ,
        componentType: 'Quad Cp' ,
        inventoryId: 292,
        typeDescription: '66mm, LONG, DBL COIL KINKED QUAD'  
    },
    {
        installId: 615,
        vendor: 'BINP, Russia' ,
        name: 'QL2G6C14B' ,
        serialNumber: '25' ,
        system: 'Storage Ring' ,
        componentType: 'Quad Cp' ,
        inventoryId: 293,
        typeDescription: '66mm, LONG, DBL COIL KINKED QUAD'  
    },
    {
        installId: 646,
        vendor: 'BINP, Russia' ,
        name: 'QH2G6C15B' ,
        serialNumber: '26' ,
        system: 'Storage Ring' ,
        componentType: 'Quad Cp' ,
        inventoryId: 294,
        typeDescription: '66mm, LONG, DBL COIL KINKED QUAD'  
    },
    {
        installId: 586,
        vendor: 'BINP, Russia' ,
        name: 'QH2G6C13B' ,
        serialNumber: '27' ,
        system: 'Storage Ring' ,
        componentType: 'Quad Cp' ,
        inventoryId: 295,
        typeDescription: '66mm, LONG, DBL COIL KINKED QUAD'  
    },
    {
        installId: 675,
        vendor: 'BINP, Russia' ,
        name: 'QL2G6C16B' ,
        serialNumber: '28' ,
        system: 'Storage Ring' ,
        componentType: 'Quad Cp' ,
        inventoryId: 296,
        typeDescription: '66mm, LONG, DBL COIL KINKED QUAD'  
    },
    {
        installId: 826,
        vendor: 'BINP, Russia' ,
        name: 'QH2G6C21B' ,
        serialNumber: '29' ,
        system: 'Storage Ring' ,
        componentType: 'Quad Cp' ,
        inventoryId: 297,
        typeDescription: '66mm, LONG, DBL COIL KINKED QUAD'  
    },
    {
        installId: 795,
        vendor: 'BINP, Russia' ,
        name: 'QL2G6C20B' ,
        serialNumber: '30' ,
        system: 'Storage Ring' ,
        componentType: 'Quad Cp' ,
        inventoryId: 298,
        typeDescription: '66mm, LONG, DBL COIL KINKED QUAD'  
    },
    {
        installId: 735,
        vendor: 'BINP, Russia' ,
        name: 'QL2G6C18B' ,
        serialNumber: '31' ,
        system: 'Storage Ring' ,
        componentType: 'Quad Cp' ,
        inventoryId: 299,
        typeDescription: '66mm, LONG, DBL COIL KINKED QUAD'  
    },
    {
        installId: 918,
        vendor: 'Tesla, England' ,
        name: 'QL1G6C24B' ,
        serialNumber: '1' ,
        system: 'Storage Ring' ,
        componentType: 'Quad D' ,
        inventoryId: 300,
        typeDescription: '66mm, DBL COIL, SHORT QUAD'  
    },
    {
        installId: 923,
        vendor: 'Tesla, England' ,
        name: 'QL1G2C25A' ,
        serialNumber: '3' ,
        system: 'Storage Ring' ,
        componentType: 'Quad D' ,
        inventoryId: 301,
        typeDescription: '66mm, DBL COIL, SHORT QUAD'  
    },
    {
        installId: 929,
        vendor: 'Tesla, England' ,
        name: 'QL3G2C25A' ,
        serialNumber: '4' ,
        system: 'Storage Ring' ,
        componentType: 'Quad D' ,
        inventoryId: 302,
        typeDescription: '66mm, DBL COIL, SHORT QUAD'  
    },
    {
        installId: 978,
        vendor: 'Tesla, England' ,
        name: 'QL1G6C26B' ,
        serialNumber: '5' ,
        system: 'Storage Ring' ,
        componentType: 'Quad D' ,
        inventoryId: 303,
        typeDescription: '66mm, DBL COIL, SHORT QUAD'  
    },
    {
        installId: 1068,
        vendor: 'Tesla, England' ,
        name: 'QH1G6C29B' ,
        serialNumber: '6' ,
        system: 'Storage Ring' ,
        componentType: 'Quad D' ,
        inventoryId: 304,
        typeDescription: '66mm, DBL COIL, SHORT QUAD'  
    },
    {
        installId: 948,
        vendor: 'Tesla, England' ,
        name: 'QH1G6C25B' ,
        serialNumber: '7' ,
        system: 'Storage Ring' ,
        componentType: 'Quad D' ,
        inventoryId: 305,
        typeDescription: '66mm, DBL COIL, SHORT QUAD'  
    },
    {
        installId: 1038,
        vendor: 'Tesla, England' ,
        name: 'QL1G6C28B' ,
        serialNumber: '8' ,
        system: 'Storage Ring' ,
        componentType: 'Quad D' ,
        inventoryId: 306,
        typeDescription: '66mm, DBL COIL, SHORT QUAD'  
    },
    {
        installId: 953,
        vendor: 'Tesla, England' ,
        name: 'QH1G2C26A' ,
        serialNumber: '9' ,
        system: 'Storage Ring' ,
        componentType: 'Quad D' ,
        inventoryId: 307,
        typeDescription: '66mm, DBL COIL, SHORT QUAD'  
    },
    {
        installId: 957,
        vendor: 'Tesla, England' ,
        name: 'QH3G2C26A' ,
        serialNumber: '10' ,
        system: 'Storage Ring' ,
        componentType: 'Quad D' ,
        inventoryId: 308,
        typeDescription: '66mm, DBL COIL, SHORT QUAD'  
    },
    {
        installId: 378,
        vendor: 'Tesla, England' ,
        name: 'QL1G6C06B' ,
        serialNumber: '11' ,
        system: 'Storage Ring' ,
        componentType: 'Quad D' ,
        inventoryId: 309,
        typeDescription: '66mm, DBL COIL, SHORT QUAD'  
    },
    {
        installId: 468,
        vendor: 'Tesla, England' ,
        name: 'QH1G6C09B' ,
        serialNumber: '12' ,
        system: 'Storage Ring' ,
        componentType: 'Quad D' ,
        inventoryId: 310,
        typeDescription: '66mm, DBL COIL, SHORT QUAD'  
    },
    {
        installId: 498,
        vendor: 'Tesla, England' ,
        name: 'QL1G6C10B' ,
        serialNumber: '13' ,
        system: 'Storage Ring' ,
        componentType: 'Quad D' ,
        inventoryId: 311,
        typeDescription: '66mm, DBL COIL, SHORT QUAD'  
    },
    {
        installId: 1043,
        vendor: 'Tesla, England' ,
        name: 'QL1G2C29A' ,
        serialNumber: '14' ,
        system: 'Storage Ring' ,
        componentType: 'Quad D' ,
        inventoryId: 312,
        typeDescription: '66mm, DBL COIL, SHORT QUAD'  
    },
    {
        installId: 1049,
        vendor: 'Tesla, England' ,
        name: 'QL3G2C29A' ,
        serialNumber: '15' ,
        system: 'Storage Ring' ,
        componentType: 'Quad D' ,
        inventoryId: 313,
        typeDescription: '66mm, DBL COIL, SHORT QUAD'  
    },
    {
        installId: 1008,
        vendor: 'Tesla, England' ,
        name: 'QH1G6C27B' ,
        serialNumber: '16' ,
        system: 'Storage Ring' ,
        componentType: 'Quad D' ,
        inventoryId: 314,
        typeDescription: '66mm, DBL COIL, SHORT QUAD'  
    },
    {
        installId: 203,
        vendor: 'Tesla, England' ,
        name: 'QL1G2C01A' ,
        serialNumber: '17' ,
        system: 'Storage Ring' ,
        componentType: 'Quad D' ,
        inventoryId: 315,
        typeDescription: '66mm, DBL COIL, SHORT QUAD'  
    },
    {
        installId: 209,
        vendor: 'Tesla, England' ,
        name: 'QL3G2C01A' ,
        serialNumber: '18' ,
        system: 'Storage Ring' ,
        componentType: 'Quad D' ,
        inventoryId: 316,
        typeDescription: '66mm, DBL COIL, SHORT QUAD'  
    },
    {
        installId: 353,
        vendor: 'Tesla, England' ,
        name: 'QH1G2C06A' ,
        serialNumber: '19' ,
        system: 'Storage Ring' ,
        componentType: 'Quad D' ,
        inventoryId: 317,
        typeDescription: '66mm, DBL COIL, SHORT QUAD'  
    },
    {
        installId: 357,
        vendor: 'Tesla, England' ,
        name: 'QH3G2C06A' ,
        serialNumber: '20' ,
        system: 'Storage Ring' ,
        componentType: 'Quad D' ,
        inventoryId: 318,
        typeDescription: '66mm, DBL COIL, SHORT QUAD'  
    },
    {
        installId: 198,
        vendor: 'Tesla, England' ,
        name: 'QL1G6C30B' ,
        serialNumber: '21' ,
        system: 'Storage Ring' ,
        componentType: 'Quad D' ,
        inventoryId: 319,
        typeDescription: '66mm, DBL COIL, SHORT QUAD'  
    },
    {
        installId: 449,
        vendor: 'Tesla, England' ,
        name: 'QL3G2C09A' ,
        serialNumber: '22' ,
        system: 'Storage Ring' ,
        componentType: 'Quad D' ,
        inventoryId: 320,
        typeDescription: '66mm, DBL COIL, SHORT QUAD'  
    },
    {
        installId: 228,
        vendor: 'Tesla, England' ,
        name: 'QH1G6C01B' ,
        serialNumber: '23' ,
        system: 'Storage Ring' ,
        componentType: 'Quad D' ,
        inventoryId: 321,
        typeDescription: '66mm, DBL COIL, SHORT QUAD'  
    },
    {
        installId: 258,
        vendor: 'Tesla, England' ,
        name: 'QL1G6C02B' ,
        serialNumber: '24' ,
        system: 'Storage Ring' ,
        componentType: 'Quad D' ,
        inventoryId: 322,
        typeDescription: '66mm, DBL COIL, SHORT QUAD'  
    },
    {
        installId: 443,
        vendor: 'Tesla, England' ,
        name: 'QL1G2C09A' ,
        serialNumber: '25' ,
        system: 'Storage Ring' ,
        componentType: 'Quad D' ,
        inventoryId: 323,
        typeDescription: '66mm, DBL COIL, SHORT QUAD'  
    },
    {
        installId: 237,
        vendor: 'Tesla, England' ,
        name: 'QH3G2C02A' ,
        serialNumber: '26' ,
        system: 'Storage Ring' ,
        componentType: 'Quad D' ,
        inventoryId: 324,
        typeDescription: '66mm, DBL COIL, SHORT QUAD'  
    },
    {
        installId: 983,
        vendor: 'Tesla, England' ,
        name: 'QL1G2C27A' ,
        serialNumber: '27' ,
        system: 'Storage Ring' ,
        componentType: 'Quad D' ,
        inventoryId: 325,
        typeDescription: '66mm, DBL COIL, SHORT QUAD'  
    },
    {
        installId: 318,
        vendor: 'Tesla, England' ,
        name: 'QL1G6C04B' ,
        serialNumber: '28' ,
        system: 'Storage Ring' ,
        componentType: 'Quad D' ,
        inventoryId: 326,
        typeDescription: '66mm, DBL COIL, SHORT QUAD'  
    },
    {
        installId: 233,
        vendor: 'Tesla, England' ,
        name: 'QH1G2C02A' ,
        serialNumber: '29' ,
        system: 'Storage Ring' ,
        componentType: 'Quad D' ,
        inventoryId: 327,
        typeDescription: '66mm, DBL COIL, SHORT QUAD'  
    },
    {
        installId: 989,
        vendor: 'Tesla, England' ,
        name: 'QL3G2C27A' ,
        serialNumber: '30' ,
        system: 'Storage Ring' ,
        componentType: 'Quad D' ,
        inventoryId: 328,
        typeDescription: '66mm, DBL COIL, SHORT QUAD'  
    },
    {
        installId: 888,
        vendor: 'Tesla, England' ,
        name: 'QH1G6C23B' ,
        serialNumber: '31' ,
        system: 'Storage Ring' ,
        componentType: 'Quad D' ,
        inventoryId: 329,
        typeDescription: '66mm, DBL COIL, SHORT QUAD'  
    },
    {
        installId: 863,
        vendor: 'Tesla, England' ,
        name: 'QL1G2C23A' ,
        serialNumber: '32' ,
        system: 'Storage Ring' ,
        componentType: 'Quad D' ,
        inventoryId: 330,
        typeDescription: '66mm, DBL COIL, SHORT QUAD'  
    },
    {
        installId: 1013,
        vendor: 'Tesla, England' ,
        name: 'QH1G2C28A' ,
        serialNumber: '33' ,
        system: 'Storage Ring' ,
        componentType: 'Quad D' ,
        inventoryId: 331,
        typeDescription: '66mm, DBL COIL, SHORT QUAD'  
    },
    {
        installId: 348,
        vendor: 'Tesla, England' ,
        name: 'QH1G6C05B' ,
        serialNumber: '34' ,
        system: 'Storage Ring' ,
        componentType: 'Quad D' ,
        inventoryId: 332,
        typeDescription: '66mm, DBL COIL, SHORT QUAD'  
    },
    {
        installId: 173,
        vendor: 'Tesla, England' ,
        name: 'QH1G2C30A' ,
        serialNumber: '35' ,
        system: 'Storage Ring' ,
        componentType: 'Quad D' ,
        inventoryId: 333,
        typeDescription: '66mm, DBL COIL, SHORT QUAD'  
    },
    {
        installId: 177,
        vendor: 'Tesla, England' ,
        name: 'QH3G2C30A' ,
        serialNumber: '36' ,
        system: 'Storage Ring' ,
        componentType: 'Quad D' ,
        inventoryId: 334,
        typeDescription: '66mm, DBL COIL, SHORT QUAD'  
    },
    {
        installId: 869,
        vendor: 'Tesla, England' ,
        name: 'QL3G2C23A' ,
        serialNumber: '37' ,
        system: 'Storage Ring' ,
        componentType: 'Quad D' ,
        inventoryId: 335,
        typeDescription: '66mm, DBL COIL, SHORT QUAD'  
    },
    {
        installId: 263,
        vendor: 'Tesla, England' ,
        name: 'QL1G2C03A' ,
        serialNumber: '38' ,
        system: 'Storage Ring' ,
        componentType: 'Quad D' ,
        inventoryId: 336,
        typeDescription: '66mm, DBL COIL, SHORT QUAD'  
    },
    {
        installId: 438,
        vendor: 'Tesla, England' ,
        name: 'QL1G6C08B' ,
        serialNumber: '39' ,
        system: 'Storage Ring' ,
        componentType: 'Quad D' ,
        inventoryId: 337,
        typeDescription: '66mm, DBL COIL, SHORT QUAD'  
    },
    {
        installId: 743,
        vendor: 'Tesla, England' ,
        name: 'QL1G2C19A' ,
        serialNumber: '40' ,
        system: 'Storage Ring' ,
        componentType: 'Quad D' ,
        inventoryId: 338,
        typeDescription: '66mm, DBL COIL, SHORT QUAD'  
    },
    {
        installId: 269,
        vendor: 'Tesla, England' ,
        name: 'QL3G2C03A' ,
        serialNumber: '41' ,
        system: 'Storage Ring' ,
        componentType: 'Quad D' ,
        inventoryId: 339,
        typeDescription: '66mm, DBL COIL, SHORT QUAD'  
    },
    {
        installId: 413,
        vendor: 'Tesla, England' ,
        name: 'QH1G2C08A' ,
        serialNumber: '42' ,
        system: 'Storage Ring' ,
        componentType: 'Quad D' ,
        inventoryId: 340,
        typeDescription: '66mm, DBL COIL, SHORT QUAD'  
    },
    {
        installId: 408,
        vendor: 'Tesla, England' ,
        name: 'QH1G6C07B' ,
        serialNumber: '43' ,
        system: 'Storage Ring' ,
        componentType: 'Quad D' ,
        inventoryId: 341,
        typeDescription: '66mm, DBL COIL, SHORT QUAD'  
    },
    {
        installId: 893,
        vendor: 'Tesla, England' ,
        name: 'QH1G2C24A' ,
        serialNumber: '44' ,
        system: 'Storage Ring' ,
        componentType: 'Quad D' ,
        inventoryId: 342,
        typeDescription: '66mm, DBL COIL, SHORT QUAD'  
    },
    {
        installId: 897,
        vendor: 'Tesla, England' ,
        name: 'QH3G2C24A' ,
        serialNumber: '45' ,
        system: 'Storage Ring' ,
        componentType: 'Quad D' ,
        inventoryId: 343,
        typeDescription: '66mm, DBL COIL, SHORT QUAD'  
    },
    {
        installId: 288,
        vendor: 'Tesla, England' ,
        name: 'QH1G6C03B' ,
        serialNumber: '46' ,
        system: 'Storage Ring' ,
        componentType: 'Quad D' ,
        inventoryId: 344,
        typeDescription: '66mm, DBL COIL, SHORT QUAD'  
    },
    {
        installId: 473,
        vendor: 'Tesla, England' ,
        name: 'QH1G2C10A' ,
        serialNumber: '47' ,
        system: 'Storage Ring' ,
        componentType: 'Quad D' ,
        inventoryId: 345,
        typeDescription: '66mm, DBL COIL, SHORT QUAD'  
    },
    {
        installId: 477,
        vendor: 'Tesla, England' ,
        name: 'QH3G2C10A' ,
        serialNumber: '48' ,
        system: 'Storage Ring' ,
        componentType: 'Quad D' ,
        inventoryId: 346,
        typeDescription: '66mm, DBL COIL, SHORT QUAD'  
    },
    {
        installId: 383,
        vendor: 'Tesla, England' ,
        name: 'QL1G2C07A' ,
        serialNumber: '49' ,
        system: 'Storage Ring' ,
        componentType: 'Quad D' ,
        inventoryId: 347,
        typeDescription: '66mm, DBL COIL, SHORT QUAD'  
    },
    {
        installId: 558,
        vendor: 'Tesla, England' ,
        name: 'QL1G6C12B' ,
        serialNumber: '50' ,
        system: 'Storage Ring' ,
        componentType: 'Quad D' ,
        inventoryId: 348,
        typeDescription: '66mm, DBL COIL, SHORT QUAD'  
    },
    {
        installId: 389,
        vendor: 'Tesla, England' ,
        name: 'QL3G2C07A' ,
        serialNumber: '51' ,
        system: 'Storage Ring' ,
        componentType: 'Quad D' ,
        inventoryId: 349,
        typeDescription: '66mm, DBL COIL, SHORT QUAD'  
    },
    {
        installId: 528,
        vendor: 'Tesla, England' ,
        name: 'QH1G6C11B' ,
        serialNumber: '52' ,
        system: 'Storage Ring' ,
        componentType: 'Quad D' ,
        inventoryId: 350,
        typeDescription: '66mm, DBL COIL, SHORT QUAD'  
    },
    {
        installId: 809,
        vendor: 'Tesla, England' ,
        name: 'QL3G2C21A' ,
        serialNumber: '53' ,
        system: 'Storage Ring' ,
        componentType: 'Quad D' ,
        inventoryId: 351,
        typeDescription: '66mm, DBL COIL, SHORT QUAD'  
    },
    {
        installId: 503,
        vendor: 'Tesla, England' ,
        name: 'QL1G2C11A' ,
        serialNumber: '54' ,
        system: 'Storage Ring' ,
        componentType: 'Quad D' ,
        inventoryId: 352,
        typeDescription: '66mm, DBL COIL, SHORT QUAD'  
    },
    {
        installId: 293,
        vendor: 'Tesla, England' ,
        name: 'QH1G2C04A' ,
        serialNumber: '55' ,
        system: 'Storage Ring' ,
        componentType: 'Quad D' ,
        inventoryId: 353,
        typeDescription: '66mm, DBL COIL, SHORT QUAD'  
    },
    {
        installId: 297,
        vendor: 'Tesla, England' ,
        name: 'QH3G2C04A' ,
        serialNumber: '56' ,
        system: 'Storage Ring' ,
        componentType: 'Quad D' ,
        inventoryId: 354,
        typeDescription: '66mm, DBL COIL, SHORT QUAD'  
    },
    {
        installId: 323,
        vendor: 'Tesla, England' ,
        name: 'QL1G2C05A' ,
        serialNumber: '57' ,
        system: 'Storage Ring' ,
        componentType: 'Quad D' ,
        inventoryId: 355,
        typeDescription: '66mm, DBL COIL, SHORT QUAD'  
    },
    {
        installId: 329,
        vendor: 'Tesla, England' ,
        name: 'QL3G2C05A' ,
        serialNumber: '58' ,
        system: 'Storage Ring' ,
        componentType: 'Quad D' ,
        inventoryId: 356,
        typeDescription: '66mm, DBL COIL, SHORT QUAD'  
    },
    {
        installId: 533,
        vendor: 'Tesla, England' ,
        name: 'QH1G2C12A' ,
        serialNumber: '59' ,
        system: 'Storage Ring' ,
        componentType: 'Quad D' ,
        inventoryId: 357,
        typeDescription: '66mm, DBL COIL, SHORT QUAD'  
    },
    {
        installId: 618,
        vendor: 'Tesla, England' ,
        name: 'QL1G6C14B' ,
        serialNumber: '60' ,
        system: 'Storage Ring' ,
        componentType: 'Quad D' ,
        inventoryId: 358,
        typeDescription: '66mm, DBL COIL, SHORT QUAD'  
    },
    {
        installId: 563,
        vendor: 'Tesla, England' ,
        name: 'QL1G2C13A' ,
        serialNumber: '61' ,
        system: 'Storage Ring' ,
        componentType: 'Quad D' ,
        inventoryId: 359,
        typeDescription: '66mm, DBL COIL, SHORT QUAD'  
    },
    {
        installId: 537,
        vendor: 'Tesla, England' ,
        name: 'QH3G2C12A' ,
        serialNumber: '62' ,
        system: 'Storage Ring' ,
        componentType: 'Quad D' ,
        inventoryId: 360,
        typeDescription: '66mm, DBL COIL, SHORT QUAD'  
    },
    {
        installId: 588,
        vendor: 'Tesla, England' ,
        name: 'QH1G6C13B' ,
        serialNumber: '63' ,
        system: 'Storage Ring' ,
        componentType: 'Quad D' ,
        inventoryId: 361,
        typeDescription: '66mm, DBL COIL, SHORT QUAD'  
    },
    {
        installId: 689,
        vendor: 'Tesla, England' ,
        name: 'QL3G2C17A' ,
        serialNumber: '64' ,
        system: 'Storage Ring' ,
        componentType: 'Quad D' ,
        inventoryId: 362,
        typeDescription: '66mm, DBL COIL, SHORT QUAD'  
    },
    {
        installId: 569,
        vendor: 'Tesla, England' ,
        name: 'QL3G2C13A' ,
        serialNumber: '65' ,
        system: 'Storage Ring' ,
        componentType: 'Quad D' ,
        inventoryId: 363,
        typeDescription: '66mm, DBL COIL, SHORT QUAD'  
    },
    {
        installId: 623,
        vendor: 'Tesla, England' ,
        name: 'QL1G2C15A' ,
        serialNumber: '66' ,
        system: 'Storage Ring' ,
        componentType: 'Quad D' ,
        inventoryId: 364,
        typeDescription: '66mm, DBL COIL, SHORT QUAD'  
    },
    {
        installId: 593,
        vendor: 'Tesla, England' ,
        name: 'QH1G2C14A' ,
        serialNumber: '67' ,
        system: 'Storage Ring' ,
        componentType: 'Quad D' ,
        inventoryId: 365,
        typeDescription: '66mm, DBL COIL, SHORT QUAD'  
    },
    {
        installId: 597,
        vendor: 'Tesla, England' ,
        name: 'QH3G2C14A' ,
        serialNumber: '68' ,
        system: 'Storage Ring' ,
        componentType: 'Quad D' ,
        inventoryId: 366,
        typeDescription: '66mm, DBL COIL, SHORT QUAD'  
    },
    {
        installId: 629,
        vendor: 'Tesla, England' ,
        name: 'QL3G2C15A' ,
        serialNumber: '69' ,
        system: 'Storage Ring' ,
        componentType: 'Quad D' ,
        inventoryId: 367,
        typeDescription: '66mm, DBL COIL, SHORT QUAD'  
    },
    {
        installId: 648,
        vendor: 'Tesla, England' ,
        name: 'QH1G6C15B' ,
        serialNumber: '70' ,
        system: 'Storage Ring' ,
        componentType: 'Quad D' ,
        inventoryId: 368,
        typeDescription: '66mm, DBL COIL, SHORT QUAD'  
    },
    {
        installId: 509,
        vendor: 'Tesla, England' ,
        name: 'QL3G2C11A' ,
        serialNumber: '71' ,
        system: 'Storage Ring' ,
        componentType: 'Quad D' ,
        inventoryId: 369,
        typeDescription: '66mm, DBL COIL, SHORT QUAD'  
    },
    {
        installId: 678,
        vendor: 'Tesla, England' ,
        name: 'QL1G6C16B' ,
        serialNumber: '72' ,
        system: 'Storage Ring' ,
        componentType: 'Quad D' ,
        inventoryId: 370,
        typeDescription: '66mm, DBL COIL, SHORT QUAD'  
    },
    {
        installId: 708,
        vendor: 'Tesla, England' ,
        name: 'QH1G6C17B' ,
        serialNumber: '73' ,
        system: 'Storage Ring' ,
        componentType: 'Quad D' ,
        inventoryId: 371,
        typeDescription: '66mm, DBL COIL, SHORT QUAD'  
    },
    {
        installId: 653,
        vendor: 'Tesla, England' ,
        name: 'QH1G2C16A' ,
        serialNumber: '74' ,
        system: 'Storage Ring' ,
        componentType: 'Quad D' ,
        inventoryId: 372,
        typeDescription: '66mm, DBL COIL, SHORT QUAD'  
    },
    {
        installId: 657,
        vendor: 'Tesla, England' ,
        name: 'QH3G2C16A' ,
        serialNumber: '75' ,
        system: 'Storage Ring' ,
        componentType: 'Quad D' ,
        inventoryId: 373,
        typeDescription: '66mm, DBL COIL, SHORT QUAD'  
    },
    {
        installId: 773,
        vendor: 'Tesla, England' ,
        name: 'QH1G2C20A' ,
        serialNumber: '76' ,
        system: 'Storage Ring' ,
        componentType: 'Quad D' ,
        inventoryId: 374,
        typeDescription: '66mm, DBL COIL, SHORT QUAD'  
    },
    {
        installId: 713,
        vendor: 'Tesla, England' ,
        name: 'QH1G2C18A' ,
        serialNumber: '77' ,
        system: 'Storage Ring' ,
        componentType: 'Quad D' ,
        inventoryId: 375,
        typeDescription: '66mm, DBL COIL, SHORT QUAD'  
    },
    {
        installId: 858,
        vendor: 'Tesla, England' ,
        name: 'QL1G6C22B' ,
        serialNumber: '78' ,
        system: 'Storage Ring' ,
        componentType: 'Quad D' ,
        inventoryId: 376,
        typeDescription: '66mm, DBL COIL, SHORT QUAD'  
    },
    {
        installId: 683,
        vendor: 'Tesla, England' ,
        name: 'QL1G2C17A' ,
        serialNumber: '79' ,
        system: 'Storage Ring' ,
        componentType: 'Quad D' ,
        inventoryId: 377,
        typeDescription: '66mm, DBL COIL, SHORT QUAD'  
    },
    {
        installId: 833,
        vendor: 'Tesla, England' ,
        name: 'QH1G2C22A' ,
        serialNumber: '80' ,
        system: 'Storage Ring' ,
        componentType: 'Quad D' ,
        inventoryId: 378,
        typeDescription: '66mm, DBL COIL, SHORT QUAD'  
    },
    {
        installId: 738,
        vendor: 'Tesla, England' ,
        name: 'QL1G6C18B' ,
        serialNumber: '81' ,
        system: 'Storage Ring' ,
        componentType: 'Quad D' ,
        inventoryId: 379,
        typeDescription: '66mm, DBL COIL, SHORT QUAD'  
    },
    {
        installId: 828,
        vendor: 'Tesla, England' ,
        name: 'QH1G6C21B' ,
        serialNumber: '82' ,
        system: 'Storage Ring' ,
        componentType: 'Quad D' ,
        inventoryId: 380,
        typeDescription: '66mm, DBL COIL, SHORT QUAD'  
    },
    {
        installId: 777,
        vendor: 'Tesla, England' ,
        name: 'QH3G2C20A' ,
        serialNumber: '83' ,
        system: 'Storage Ring' ,
        componentType: 'Quad D' ,
        inventoryId: 381,
        typeDescription: '66mm, DBL COIL, SHORT QUAD'  
    },
    {
        installId: 837,
        vendor: 'Tesla, England' ,
        name: 'QH3G2C22A' ,
        serialNumber: '84' ,
        system: 'Storage Ring' ,
        componentType: 'Quad D' ,
        inventoryId: 382,
        typeDescription: '66mm, DBL COIL, SHORT QUAD'  
    },
    {
        installId: 798,
        vendor: 'Tesla, England' ,
        name: 'QL1G6C20B' ,
        serialNumber: '85' ,
        system: 'Storage Ring' ,
        componentType: 'Quad D' ,
        inventoryId: 383,
        typeDescription: '66mm, DBL COIL, SHORT QUAD'  
    },
    {
        installId: null,
        vendor: 'Tesla, England' ,
        name: nl,
        serialNumber: '86' ,
        system: ll,
        componentType:  Quad D' ,
        inventoryId: 384,
        typeDescription:  66mm, DBL COIL, SHORT QUAD'  
    },
    {
        installId: 803,
        vendor: 'Tesla, England' ,
        name: 'QL1G2C21A' ,
        serialNumber: '87' ,
        system: 'Storage Ring' ,
        componentType: 'Quad D' ,
        inventoryId: 385,
        typeDescription: '66mm, DBL COIL, SHORT QUAD'  
    },
    {
        installId: null,
        vendor: 'Tesla, England' ,
        name: nl,
        serialNumber: '88' ,
        system: ll,
        componentType:  Quad D' ,
        inventoryId: 386,
        typeDescription:  66mm, DBL COIL, SHORT QUAD'  
    },
    {
        installId: null,
        vendor: 'Tesla, England' ,
        name: nl,
        serialNumber: '89' ,
        system: ll,
        componentType:  Quad D' ,
        inventoryId: 387,
        typeDescription:  66mm, DBL COIL, SHORT QUAD'  
    },
    {
        installId: 768,
        vendor: 'Tesla, England' ,
        name: 'QH1G6C19B' ,
        serialNumber: '90' ,
        system: 'Storage Ring' ,
        componentType: 'Quad D' ,
        inventoryId: 388,
        typeDescription: '66mm, DBL COIL, SHORT QUAD'  
    },
    {
        installId: 749,
        vendor: 'Tesla, England' ,
        name: 'QL3G2C19A' ,
        serialNumber: '91' ,
        system: 'Storage Ring' ,
        componentType: 'Quad D' ,
        inventoryId: 389,
        typeDescription: '66mm, DBL COIL, SHORT QUAD'  
    },
    {
        installId: 1017,
        vendor: 'BINP, Russia' ,
        name: 'QH3G2C28A' ,
        serialNumber: '1' ,
        system: 'Storage Ring' ,
        componentType: 'Quad D2' ,
        inventoryId: 390,
        typeDescription: '66mm, DBL COIL, SHORT QUAD'  
    },
    {
        installId: 417,
        vendor: 'BINP, Russia' ,
        name: 'QH3G2C08A' ,
        serialNumber: '1002' ,
        system: 'Storage Ring' ,
        componentType: 'Quad D2' ,
        inventoryId: 391,
        typeDescription: '66mm, DBL COIL, SHORT QUAD'  
    },
    {
        installId: 717,
        vendor: 'BINP, Russia' ,
        name: 'QH3G2C18A' ,
        serialNumber: '1003' ,
        system: 'Storage Ring' ,
        componentType: 'Quad D2' ,
        inventoryId: 392,
        typeDescription: '66mm, DBL COIL, SHORT QUAD'  
    },
    {
        installId: 905,
        vendor: 'Buckley, New Zealand' ,
        name: 'QM2G4C24A' ,
        serialNumber: '1' ,
        system: 'Storage Ring' ,
        componentType: 'Quad F' ,
        inventoryId: 393,
        typeDescription: '90mm, DBL COIL, SHORT QUAD'  
    },
    {
        installId: 907,
        vendor: 'Buckley, New Zealand' ,
        name: 'QM2G4C24B' ,
        serialNumber: '2' ,
        system: 'Storage Ring' ,
        componentType: 'Quad F' ,
        inventoryId: 394,
        typeDescription: '90mm, DBL COIL, SHORT QUAD'  
    },
    {
        installId: 935,
        vendor: 'Buckley, New Zealand' ,
        name: 'QM2G4C25A' ,
        serialNumber: '3' ,
        system: 'Storage Ring' ,
        componentType: 'Quad F' ,
        inventoryId: 395,
        typeDescription: '90mm, DBL COIL, SHORT QUAD'  
    },
    {
        installId: 245,
        vendor: 'Buckley, New Zealand' ,
        name: 'QM2G4C02A' ,
        serialNumber: '4' ,
        system: 'Storage Ring' ,
        componentType: 'Quad F' ,
        inventoryId: 396,
        typeDescription: '90mm, DBL COIL, SHORT QUAD'  
    },
    {
        installId: 545,
        vendor: 'Buckley, New Zealand' ,
        name: 'QM2G4C12A' ,
        serialNumber: '5' ,
        system: 'Storage Ring' ,
        componentType: 'Quad F' ,
        inventoryId: 397,
        typeDescription: '90mm, DBL COIL, SHORT QUAD'  
    },
    {
        installId: 247,
        vendor: 'Buckley, New Zealand' ,
        name: 'QM2G4C02B' ,
        serialNumber: '6' ,
        system: 'Storage Ring' ,
        componentType: 'Quad F' ,
        inventoryId: 398,
        typeDescription: '90mm, DBL COIL, SHORT QUAD'  
    },
    {
        installId: 1055,
        vendor: 'Buckley, New Zealand' ,
        name: 'QM2G4C29A' ,
        serialNumber: '7' ,
        system: 'Storage Ring' ,
        componentType: 'Quad F' ,
        inventoryId: 399,
        typeDescription: '90mm, DBL COIL, SHORT QUAD'  
    },
    {
        installId: 455,
        vendor: 'Buckley, New Zealand' ,
        name: 'QM2G4C09A' ,
        serialNumber: '8' ,
        system: 'Storage Ring' ,
        componentType: 'Quad F' ,
        inventoryId: 400,
        typeDescription: '90mm, DBL COIL, SHORT QUAD'  
    },
    {
        installId: 1057,
        vendor: 'Buckley, New Zealand' ,
        name: 'QM2G4C29B' ,
        serialNumber: '9' ,
        system: 'Storage Ring' ,
        componentType: 'Quad F' ,
        inventoryId: 401,
        typeDescription: '90mm, DBL COIL, SHORT QUAD'  
    },
    {
        installId: 965,
        vendor: 'Buckley, New Zealand' ,
        name: 'QM2G4C26A' ,
        serialNumber: '10' ,
        system: 'Storage Ring' ,
        componentType: 'Quad F' ,
        inventoryId: 402,
        typeDescription: '90mm, DBL COIL, SHORT QUAD'  
    },
    {
        installId: 457,
        vendor: 'Buckley, New Zealand' ,
        name: 'QM2G4C09B' ,
        serialNumber: '11' ,
        system: 'Storage Ring' ,
        componentType: 'Quad F' ,
        inventoryId: 403,
        typeDescription: '90mm, DBL COIL, SHORT QUAD'  
    },
    {
        installId: 937,
        vendor: 'Buckley, New Zealand' ,
        name: 'QM2G4C25B' ,
        serialNumber: '12' ,
        system: 'Storage Ring' ,
        componentType: 'Quad F' ,
        inventoryId: 404,
        typeDescription: '90mm, DBL COIL, SHORT QUAD'  
    },
    {
        installId: 967,
        vendor: 'Buckley, New Zealand' ,
        name: 'QM2G4C26B' ,
        serialNumber: '13' ,
        system: 'Storage Ring' ,
        componentType: 'Quad F' ,
        inventoryId: 405,
        typeDescription: '90mm, DBL COIL, SHORT QUAD'  
    },
    {
        installId: 275,
        vendor: 'Buckley, New Zealand' ,
        name: 'QM2G4C03A' ,
        serialNumber: '14' ,
        system: 'Storage Ring' ,
        componentType: 'Quad F' ,
        inventoryId: 406,
        typeDescription: '90mm, DBL COIL, SHORT QUAD'  
    },
    {
        installId: 277,
        vendor: 'Buckley, New Zealand' ,
        name: 'QM2G4C03B' ,
        serialNumber: '15' ,
        system: 'Storage Ring' ,
        componentType: 'Quad F' ,
        inventoryId: 407,
        typeDescription: '90mm, DBL COIL, SHORT QUAD'  
    },
    {
        installId: 335,
        vendor: 'Buckley, New Zealand' ,
        name: 'QM2G4C05A' ,
        serialNumber: '16' ,
        system: 'Storage Ring' ,
        componentType: 'Quad F' ,
        inventoryId: 408,
        typeDescription: '90mm, DBL COIL, SHORT QUAD'  
    },
    {
        installId: 337,
        vendor: 'Buckley, New Zealand' ,
        name: 'QM2G4C05B' ,
        serialNumber: '17' ,
        system: 'Storage Ring' ,
        componentType: 'Quad F' ,
        inventoryId: 409,
        typeDescription: '90mm, DBL COIL, SHORT QUAD'  
    },
    {
        installId: 307,
        vendor: 'Buckley, New Zealand' ,
        name: 'QM2G4C04B' ,
        serialNumber: '18' ,
        system: 'Storage Ring' ,
        componentType: 'Quad F' ,
        inventoryId: 410,
        typeDescription: '90mm, DBL COIL, SHORT QUAD'  
    },
    {
        installId: 215,
        vendor: 'Buckley, New Zealand' ,
        name: 'QM2G4C01A' ,
        serialNumber: '19' ,
        system: 'Storage Ring' ,
        componentType: 'Quad F' ,
        inventoryId: 411,
        typeDescription: '90mm, DBL COIL, SHORT QUAD'  
    },
    {
        installId: 305,
        vendor: 'Buckley, New Zealand' ,
        name: 'QM2G4C04A' ,
        serialNumber: '20' ,
        system: 'Storage Ring' ,
        componentType: 'Quad F' ,
        inventoryId: 412,
        typeDescription: '90mm, DBL COIL, SHORT QUAD'  
    },
    {
        installId: 425,
        vendor: 'Buckley, New Zealand' ,
        name: 'QM2G4C08A' ,
        serialNumber: '21' ,
        system: 'Storage Ring' ,
        componentType: 'Quad F' ,
        inventoryId: 413,
        typeDescription: '90mm, DBL COIL, SHORT QUAD'  
    },
    {
        installId: 487,
        vendor: 'Buckley, New Zealand' ,
        name: 'QM2G4C10B' ,
        serialNumber: '22' ,
        system: 'Storage Ring' ,
        componentType: 'Quad F' ,
        inventoryId: 414,
        typeDescription: '90mm, DBL COIL, SHORT QUAD'  
    },
    {
        installId: 547,
        vendor: 'Buckley, New Zealand' ,
        name: 'QM2G4C12B' ,
        serialNumber: '23' ,
        system: 'Storage Ring' ,
        componentType: 'Quad F' ,
        inventoryId: 415,
        typeDescription: '90mm, DBL COIL, SHORT QUAD'  
    },
    {
        installId: 575,
        vendor: 'Buckley, New Zealand' ,
        name: 'QM2G4C13A' ,
        serialNumber: '24' ,
        system: 'Storage Ring' ,
        componentType: 'Quad F' ,
        inventoryId: 416,
        typeDescription: '90mm, DBL COIL, SHORT QUAD'  
    },
    {
        installId: 577,
        vendor: 'Buckley, New Zealand' ,
        name: 'QM2G4C13B' ,
        serialNumber: '25' ,
        system: 'Storage Ring' ,
        componentType: 'Quad F' ,
        inventoryId: 417,
        typeDescription: '90mm, DBL COIL, SHORT QUAD'  
    },
    {
        installId: 875,
        vendor: 'Buckley, New Zealand' ,
        name: 'QM2G4C23A' ,
        serialNumber: '26' ,
        system: 'Storage Ring' ,
        componentType: 'Quad F' ,
        inventoryId: 418,
        typeDescription: '90mm, DBL COIL, SHORT QUAD'  
    },
    {
        installId: 877,
        vendor: 'Buckley, New Zealand' ,
        name: 'QM2G4C23B' ,
        serialNumber: '27' ,
        system: 'Storage Ring' ,
        componentType: 'Quad F' ,
        inventoryId: 419,
        typeDescription: '90mm, DBL COIL, SHORT QUAD'  
    },
    {
        installId: 365,
        vendor: 'Buckley, New Zealand' ,
        name: 'QM2G4C06A' ,
        serialNumber: '28' ,
        system: 'Storage Ring' ,
        componentType: 'Quad F' ,
        inventoryId: 420,
        typeDescription: '90mm, DBL COIL, SHORT QUAD'  
    },
    {
        installId: 367,
        vendor: 'Buckley, New Zealand' ,
        name: 'QM2G4C06B' ,
        serialNumber: '29' ,
        system: 'Storage Ring' ,
        componentType: 'Quad F' ,
        inventoryId: 421,
        typeDescription: '90mm, DBL COIL, SHORT QUAD'  
    },
    {
        installId: 515,
        vendor: 'Buckley, New Zealand' ,
        name: 'QM2G4C11A' ,
        serialNumber: '30' ,
        system: 'Storage Ring' ,
        componentType: 'Quad F' ,
        inventoryId: 422,
        typeDescription: '90mm, DBL COIL, SHORT QUAD'  
    },
    {
        installId: 517,
        vendor: 'Buckley, New Zealand' ,
        name: 'QM2G4C11B' ,
        serialNumber: '31' ,
        system: 'Storage Ring' ,
        componentType: 'Quad F' ,
        inventoryId: 423,
        typeDescription: '90mm, DBL COIL, SHORT QUAD'  
    },
    {
        installId: 605,
        vendor: 'Buckley, New Zealand' ,
        name: 'QM2G4C14A' ,
        serialNumber: '32' ,
        system: 'Storage Ring' ,
        componentType: 'Quad F' ,
        inventoryId: 424,
        typeDescription: '90mm, DBL COIL, SHORT QUAD'  
    },
    {
        installId: 607,
        vendor: 'Buckley, New Zealand' ,
        name: 'QM2G4C14B' ,
        serialNumber: '33' ,
        system: 'Storage Ring' ,
        componentType: 'Quad F' ,
        inventoryId: 425,
        typeDescription: '90mm, DBL COIL, SHORT QUAD'  
    },
    {
        installId: 635,
        vendor: 'Buckley, New Zealand' ,
        name: 'QM2G4C15A' ,
        serialNumber: '34' ,
        system: 'Storage Ring' ,
        componentType: 'Quad F' ,
        inventoryId: 426,
        typeDescription: '90mm, DBL COIL, SHORT QUAD'  
    },
    {
        installId: 637,
        vendor: 'Buckley, New Zealand' ,
        name: 'QM2G4C15B' ,
        serialNumber: '35' ,
        system: 'Storage Ring' ,
        componentType: 'Quad F' ,
        inventoryId: 427,
        typeDescription: '90mm, DBL COIL, SHORT QUAD'  
    },
    {
        installId: 485,
        vendor: 'Buckley, New Zealand' ,
        name: 'QM2G4C10A' ,
        serialNumber: '36' ,
        system: 'Storage Ring' ,
        componentType: 'Quad F' ,
        inventoryId: 428,
        typeDescription: '90mm, DBL COIL, SHORT QUAD'  
    },
    {
        installId: 995,
        vendor: 'Buckley, New Zealand' ,
        name: 'QM2G4C27A' ,
        serialNumber: '37' ,
        system: 'Storage Ring' ,
        componentType: 'Quad F' ,
        inventoryId: 429,
        typeDescription: '90mm, DBL COIL, SHORT QUAD'  
    },
    {
        installId: 427,
        vendor: 'Buckley, New Zealand' ,
        name: 'QM2G4C08B' ,
        serialNumber: '38' ,
        system: 'Storage Ring' ,
        componentType: 'Quad F' ,
        inventoryId: 430,
        typeDescription: '90mm, DBL COIL, SHORT QUAD'  
    },
    {
        installId: 665,
        vendor: 'Buckley, New Zealand' ,
        name: 'QM2G4C16A' ,
        serialNumber: '39' ,
        system: 'Storage Ring' ,
        componentType: 'Quad F' ,
        inventoryId: 431,
        typeDescription: '90mm, DBL COIL, SHORT QUAD'  
    },
    {
        installId: 667,
        vendor: 'Buckley, New Zealand' ,
        name: 'QM2G4C16B' ,
        serialNumber: '40' ,
        system: 'Storage Ring' ,
        componentType: 'Quad F' ,
        inventoryId: 432,
        typeDescription: '90mm, DBL COIL, SHORT QUAD'  
    },
    {
        installId: 997,
        vendor: 'Buckley, New Zealand' ,
        name: 'QM2G4C27B' ,
        serialNumber: '41' ,
        system: 'Storage Ring' ,
        componentType: 'Quad F' ,
        inventoryId: 433,
        typeDescription: '90mm, DBL COIL, SHORT QUAD'  
    },
    {
        installId: 217,
        vendor: 'Buckley, New Zealand' ,
        name: 'QM2G4C01B' ,
        serialNumber: '42' ,
        system: 'Storage Ring' ,
        componentType: 'Quad F' ,
        inventoryId: 434,
        typeDescription: '90mm, DBL COIL, SHORT QUAD'  
    },
    {
        installId: 395,
        vendor: 'Buckley, New Zealand' ,
        name: 'QM2G4C07A' ,
        serialNumber: '43' ,
        system: 'Storage Ring' ,
        componentType: 'Quad F' ,
        inventoryId: 435,
        typeDescription: '90mm, DBL COIL, SHORT QUAD'  
    },
    {
        installId: 397,
        vendor: 'Buckley, New Zealand' ,
        name: 'QM2G4C07B' ,
        serialNumber: '44' ,
        system: 'Storage Ring' ,
        componentType: 'Quad F' ,
        inventoryId: 436,
        typeDescription: '90mm, DBL COIL, SHORT QUAD'  
    },
    {
        installId: 1025,
        vendor: 'Buckley, New Zealand' ,
        name: 'QM2G4C28A' ,
        serialNumber: '45' ,
        system: 'Storage Ring' ,
        componentType: 'Quad F' ,
        inventoryId: 437,
        typeDescription: '90mm, DBL COIL, SHORT QUAD'  
    },
    {
        installId: 1027,
        vendor: 'Buckley, New Zealand' ,
        name: 'QM2G4C28B' ,
        serialNumber: '46' ,
        system: 'Storage Ring' ,
        componentType: 'Quad F' ,
        inventoryId: 438,
        typeDescription: '90mm, DBL COIL, SHORT QUAD'  
    },
    {
        installId: 785,
        vendor: 'Buckley, New Zealand' ,
        name: 'QM2G4C20A' ,
        serialNumber: '47' ,
        system: 'Storage Ring' ,
        componentType: 'Quad F' ,
        inventoryId: 439,
        typeDescription: '90mm, DBL COIL, SHORT QUAD'  
    },
    {
        installId: 845,
        vendor: 'Buckley, New Zealand' ,
        name: 'QM2G4C22A' ,
        serialNumber: '48' ,
        system: 'Storage Ring' ,
        componentType: 'Quad F' ,
        inventoryId: 440,
        typeDescription: '90mm, DBL COIL, SHORT QUAD'  
    },
    {
        installId: 847,
        vendor: 'Buckley, New Zealand' ,
        name: 'QM2G4C22B' ,
        serialNumber: '49' ,
        system: 'Storage Ring' ,
        componentType: 'Quad F' ,
        inventoryId: 441,
        typeDescription: '90mm, DBL COIL, SHORT QUAD'  
    },
    {
        installId: 725,
        vendor: 'Buckley, New Zealand' ,
        name: 'QM2G4C18A' ,
        serialNumber: '50' ,
        system: 'Storage Ring' ,
        componentType: 'Quad F' ,
        inventoryId: 442,
        typeDescription: '90mm, DBL COIL, SHORT QUAD'  
    },
    {
        installId: 727,
        vendor: 'Buckley, New Zealand' ,
        name: 'QM2G4C18B' ,
        serialNumber: '51' ,
        system: 'Storage Ring' ,
        componentType: 'Quad F' ,
        inventoryId: 443,
        typeDescription: '90mm, DBL COIL, SHORT QUAD'  
    },
    {
        installId: 185,
        vendor: 'Buckley, New Zealand' ,
        name: 'QM2G4C30A' ,
        serialNumber: '52' ,
        system: 'Storage Ring' ,
        componentType: 'Quad F' ,
        inventoryId: 444,
        typeDescription: '90mm, DBL COIL, SHORT QUAD'  
    },
    {
        installId: 187,
        vendor: 'Buckley, New Zealand' ,
        name: 'QM2G4C30B' ,
        serialNumber: '53' ,
        system: 'Storage Ring' ,
        componentType: 'Quad F' ,
        inventoryId: 445,
        typeDescription: '90mm, DBL COIL, SHORT QUAD'  
    },
    {
        installId: 695,
        vendor: 'Buckley, New Zealand' ,
        name: 'QM2G4C17A' ,
        serialNumber: '54' ,
        system: 'Storage Ring' ,
        componentType: 'Quad F' ,
        inventoryId: 446,
        typeDescription: '90mm, DBL COIL, SHORT QUAD'  
    },
    {
        installId: 697,
        vendor: 'Buckley, New Zealand' ,
        name: 'QM2G4C17B' ,
        serialNumber: '55' ,
        system: 'Storage Ring' ,
        componentType: 'Quad F' ,
        inventoryId: 447,
        typeDescription: '90mm, DBL COIL, SHORT QUAD'  
    },
    {
        installId: 755,
        vendor: 'Buckley, New Zealand' ,
        name: 'QM2G4C19A' ,
        serialNumber: '56' ,
        system: 'Storage Ring' ,
        componentType: 'Quad F' ,
        inventoryId: 448,
        typeDescription: '90mm, DBL COIL, SHORT QUAD'  
    },
    {
        installId: 757,
        vendor: 'Buckley, New Zealand' ,
        name: 'QM2G4C19B' ,
        serialNumber: '57' ,
        system: 'Storage Ring' ,
        componentType: 'Quad F' ,
        inventoryId: 449,
        typeDescription: '90mm, DBL COIL, SHORT QUAD'  
    },
    {
        installId: 815,
        vendor: 'Buckley, New Zealand' ,
        name: 'QM2G4C21A' ,
        serialNumber: '58' ,
        system: 'Storage Ring' ,
        componentType: 'Quad F' ,
        inventoryId: 450,
        typeDescription: '90mm, DBL COIL, SHORT QUAD'  
    },
    {
        installId: 817,
        vendor: 'Buckley, New Zealand' ,
        name: 'QM2G4C21B' ,
        serialNumber: '59' ,
        system: 'Storage Ring' ,
        componentType: 'Quad F' ,
        inventoryId: 451,
        typeDescription: '90mm, DBL COIL, SHORT QUAD'  
    },
    {
        installId: 787,
        vendor: 'Buckley, New Zealand' ,
        name: 'QM2G4C20B' ,
        serialNumber: '60' ,
        system: 'Storage Ring' ,
        componentType: 'Quad F' ,
        inventoryId: 452,
        typeDescription: '90mm, DBL COIL, SHORT QUAD'  
    },
    {
        installId: null,
        vendor: 'IHEP, China' ,
        name: nl,
        serialNumber: '1001' ,
        system: ll,
        componentType:  Quad F' ,
        inventoryId: 453,
        typeDescription:  90mm, DBL COIL, SHORT QUAD'  
    },
    {
        installId: null,
        vendor: 'IHEP, China' ,
        name: nl,
        serialNumber: '1002' ,
        system: ll,
        componentType:  Quad F' ,
        inventoryId: 454,
        typeDescription:  90mm, DBL COIL, SHORT QUAD'  
    },
    {
        installId: null,
        vendor: 'IHEP, China' ,
        name: nl,
        serialNumber: '1003' ,
        system: ll,
        componentType:  Quad F' ,
        inventoryId: 455,
        typeDescription:  90mm, DBL COIL, SHORT QUAD'  
    },
    {
        installId: null,
        vendor: 'IHEP, China' ,
        name: nl,
        serialNumber: '1004' ,
        system: ll,
        componentType:  Quad F' ,
        inventoryId: 456,
        typeDescription:  90mm, DBL COIL, SHORT QUAD'  
    },
    {
        installId: 902,
        vendor: 'BINP, Russia' ,
        name: 'QM1G4C24A' ,
        serialNumber: '1' ,
        system: 'Storage Ring' ,
        componentType: 'Quad B' ,
        inventoryId: 457,
        typeDescription: '66mm, SNGL COIL, SHORT QUAD'  
    },
    {
        installId: 932,
        vendor: 'BINP, Russia' ,
        name: 'QM1G4C25A' ,
        serialNumber: '2' ,
        system: 'Storage Ring' ,
        componentType: 'Quad B' ,
        inventoryId: 458,
        typeDescription: '66mm, SNGL COIL, SHORT QUAD'  
    },
    {
        installId: 962,
        vendor: 'BINP, Russia' ,
        name: 'QM1G4C26A' ,
        serialNumber: '3' ,
        system: 'Storage Ring' ,
        componentType: 'Quad B' ,
        inventoryId: 459,
        typeDescription: '66mm, SNGL COIL, SHORT QUAD'  
    },
    {
        installId: 242,
        vendor: 'BINP, Russia' ,
        name: 'QM1G4C02A' ,
        serialNumber: '4' ,
        system: 'Storage Ring' ,
        componentType: 'Quad B' ,
        inventoryId: 460,
        typeDescription: '66mm, SNGL COIL, SHORT QUAD'  
    },
    {
        installId: 272,
        vendor: 'BINP, Russia' ,
        name: 'QM1G4C03A' ,
        serialNumber: '5' ,
        system: 'Storage Ring' ,
        componentType: 'Quad B' ,
        inventoryId: 461,
        typeDescription: '66mm, SNGL COIL, SHORT QUAD'  
    },
    {
        installId: 1052,
        vendor: 'BINP, Russia' ,
        name: 'QM1G4C29A' ,
        serialNumber: '6' ,
        system: 'Storage Ring' ,
        componentType: 'Quad B' ,
        inventoryId: 462,
        typeDescription: '66mm, SNGL COIL, SHORT QUAD'  
    },
    {
        installId: 452,
        vendor: 'BINP, Russia' ,
        name: 'QM1G4C09A' ,
        serialNumber: '7' ,
        system: 'Storage Ring' ,
        componentType: 'Quad B' ,
        inventoryId: 463,
        typeDescription: '66mm, SNGL COIL, SHORT QUAD'  
    },
    {
        installId: 332,
        vendor: 'BINP, Russia' ,
        name: 'QM1G4C05A' ,
        serialNumber: '8' ,
        system: 'Storage Ring' ,
        componentType: 'Quad B' ,
        inventoryId: 464,
        typeDescription: '66mm, SNGL COIL, SHORT QUAD'  
    },
    {
        installId: 302,
        vendor: 'BINP, Russia' ,
        name: 'QM1G4C04A' ,
        serialNumber: '9' ,
        system: 'Storage Ring' ,
        componentType: 'Quad B' ,
        inventoryId: 465,
        typeDescription: '66mm, SNGL COIL, SHORT QUAD'  
    },
    {
        installId: 422,
        vendor: 'BINP, Russia' ,
        name: 'QM1G4C08A' ,
        serialNumber: '10' ,
        system: 'Storage Ring' ,
        componentType: 'Quad B' ,
        inventoryId: 466,
        typeDescription: '66mm, SNGL COIL, SHORT QUAD'  
    },
    {
        installId: 362,
        vendor: 'BINP, Russia' ,
        name: 'QM1G4C06A' ,
        serialNumber: '11' ,
        system: 'Storage Ring' ,
        componentType: 'Quad B' ,
        inventoryId: 467,
        typeDescription: '66mm, SNGL COIL, SHORT QUAD'  
    },
    {
        installId: 512,
        vendor: 'BINP, Russia' ,
        name: 'QM1G4C11A' ,
        serialNumber: '12' ,
        system: 'Storage Ring' ,
        componentType: 'Quad B' ,
        inventoryId: 468,
        typeDescription: '66mm, SNGL COIL, SHORT QUAD'  
    },
    {
        installId: 842,
        vendor: 'BINP, Russia' ,
        name: 'QM1G4C22A' ,
        serialNumber: '13' ,
        system: 'Storage Ring' ,
        componentType: 'Quad B' ,
        inventoryId: 469,
        typeDescription: '66mm, SNGL COIL, SHORT QUAD'  
    },
    {
        installId: 632,
        vendor: 'BINP, Russia' ,
        name: 'QM1G4C15A' ,
        serialNumber: '14' ,
        system: 'Storage Ring' ,
        componentType: 'Quad B' ,
        inventoryId: 470,
        typeDescription: '66mm, SNGL COIL, SHORT QUAD'  
    },
    {
        installId: 872,
        vendor: 'BINP, Russia' ,
        name: 'QM1G4C23A' ,
        serialNumber: '15' ,
        system: 'Storage Ring' ,
        componentType: 'Quad B' ,
        inventoryId: 471,
        typeDescription: '66mm, SNGL COIL, SHORT QUAD'  
    },
    {
        installId: 542,
        vendor: 'BINP, Russia' ,
        name: 'QM1G4C12A' ,
        serialNumber: '16' ,
        system: 'Storage Ring' ,
        componentType: 'Quad B' ,
        inventoryId: 472,
        typeDescription: '66mm, SNGL COIL, SHORT QUAD'  
    },
    {
        installId: 602,
        vendor: 'BINP, Russia' ,
        name: 'QM1G4C14A' ,
        serialNumber: '17' ,
        system: 'Storage Ring' ,
        componentType: 'Quad B' ,
        inventoryId: 473,
        typeDescription: '66mm, SNGL COIL, SHORT QUAD'  
    },
    {
        installId: 1022,
        vendor: 'BINP, Russia' ,
        name: 'QM1G4C28A' ,
        serialNumber: '18' ,
        system: 'Storage Ring' ,
        componentType: 'Quad B' ,
        inventoryId: 474,
        typeDescription: '66mm, SNGL COIL, SHORT QUAD'  
    },
    {
        installId: 392,
        vendor: 'BINP, Russia' ,
        name: 'QM1G4C07A' ,
        serialNumber: '19' ,
        system: 'Storage Ring' ,
        componentType: 'Quad B' ,
        inventoryId: 475,
        typeDescription: '66mm, SNGL COIL, SHORT QUAD'  
    },
    {
        installId: 482,
        vendor: 'BINP, Russia' ,
        name: 'QM1G4C10A' ,
        serialNumber: '20' ,
        system: 'Storage Ring' ,
        componentType: 'Quad B' ,
        inventoryId: 476,
        typeDescription: '66mm, SNGL COIL, SHORT QUAD'  
    },
    {
        installId: 572,
        vendor: 'BINP, Russia' ,
        name: 'QM1G4C13A' ,
        serialNumber: '21' ,
        system: 'Storage Ring' ,
        componentType: 'Quad B' ,
        inventoryId: 477,
        typeDescription: '66mm, SNGL COIL, SHORT QUAD'  
    },
    {
        installId: 662,
        vendor: 'BINP, Russia' ,
        name: 'QM1G4C16A' ,
        serialNumber: '22' ,
        system: 'Storage Ring' ,
        componentType: 'Quad B' ,
        inventoryId: 478,
        typeDescription: '66mm, SNGL COIL, SHORT QUAD'  
    },
    {
        installId: 182,
        vendor: 'BINP, Russia' ,
        name: 'QM1G4C30A' ,
        serialNumber: '23' ,
        system: 'Storage Ring' ,
        componentType: 'Quad B' ,
        inventoryId: 479,
        typeDescription: '66mm, SNGL COIL, SHORT QUAD'  
    },
    {
        installId: 992,
        vendor: 'BINP, Russia' ,
        name: 'QM1G4C27A' ,
        serialNumber: '24' ,
        system: 'Storage Ring' ,
        componentType: 'Quad B' ,
        inventoryId: 480,
        typeDescription: '66mm, SNGL COIL, SHORT QUAD'  
    },
    {
        installId: 722,
        vendor: 'BINP, Russia' ,
        name: 'QM1G4C18A' ,
        serialNumber: '25' ,
        system: 'Storage Ring' ,
        componentType: 'Quad B' ,
        inventoryId: 481,
        typeDescription: '66mm, SNGL COIL, SHORT QUAD'  
    },
    {
        installId: 812,
        vendor: 'BINP, Russia' ,
        name: 'QM1G4C21A' ,
        serialNumber: '26' ,
        system: 'Storage Ring' ,
        componentType: 'Quad B' ,
        inventoryId: 482,
        typeDescription: '66mm, SNGL COIL, SHORT QUAD'  
    },
    {
        installId: 692,
        vendor: 'BINP, Russia' ,
        name: 'QM1G4C17A' ,
        serialNumber: '27' ,
        system: 'Storage Ring' ,
        componentType: 'Quad B' ,
        inventoryId: 483,
        typeDescription: '66mm, SNGL COIL, SHORT QUAD'  
    },
    {
        installId: 212,
        vendor: 'BINP, Russia' ,
        name: 'QM1G4C01A' ,
        serialNumber: '28' ,
        system: 'Storage Ring' ,
        componentType: 'Quad B' ,
        inventoryId: 484,
        typeDescription: '66mm, SNGL COIL, SHORT QUAD'  
    },
    {
        installId: 782,
        vendor: 'BINP, Russia' ,
        name: 'QM1G4C20A' ,
        serialNumber: '29' ,
        system: 'Storage Ring' ,
        componentType: 'Quad B' ,
        inventoryId: 485,
        typeDescription: '66mm, SNGL COIL, SHORT QUAD'  
    },
    {
        installId: 752,
        vendor: 'BINP, Russia' ,
        name: 'QM1G4C19A' ,
        serialNumber: '30' ,
        system: 'Storage Ring' ,
        componentType: 'Quad B' ,
        inventoryId: 486,
        typeDescription: '66mm, SNGL COIL, SHORT QUAD'  
    },
    {
        installId: 944,
        vendor: 'Tesla, England' ,
        name: 'QH3G6C25B' ,
        serialNumber: '2' ,
        system: 'Storage Ring' ,
        componentType: 'Quad E' ,
        inventoryId: 487,
        typeDescription: '66mm, DBL COIL, WIDE QUAD'  
    },
    {
        installId: 912,
        vendor: 'Tesla, England' ,
        name: 'QL3G6C24B' ,
        serialNumber: '4' ,
        system: 'Storage Ring' ,
        componentType: 'Quad E' ,
        inventoryId: 488,
        typeDescription: '66mm, DBL COIL, WIDE QUAD'  
    },
    {
        installId: 972,
        vendor: 'Tesla, England' ,
        name: 'QL3G6C26B' ,
        serialNumber: '5' ,
        system: 'Storage Ring' ,
        componentType: 'Quad E' ,
        inventoryId: 489,
        typeDescription: '66mm, DBL COIL, WIDE QUAD'  
    },
    {
        installId: 1032,
        vendor: 'Tesla, England' ,
        name: 'QL3G6C28B' ,
        serialNumber: '6' ,
        system: 'Storage Ring' ,
        componentType: 'Quad E' ,
        inventoryId: 490,
        typeDescription: '66mm, DBL COIL, WIDE QUAD'  
    },
    {
        installId: 1064,
        vendor: 'Tesla, England' ,
        name: 'QH3G6C29B' ,
        serialNumber: '7' ,
        system: 'Storage Ring' ,
        componentType: 'Quad E' ,
        inventoryId: 491,
        typeDescription: '66mm, DBL COIL, WIDE QUAD'  
    },
    {
        installId: 372,
        vendor: 'Tesla, England' ,
        name: 'QL3G6C06B' ,
        serialNumber: '8' ,
        system: 'Storage Ring' ,
        componentType: 'Quad E' ,
        inventoryId: 492,
        typeDescription: '66mm, DBL COIL, WIDE QUAD'  
    },
    {
        installId: 492,
        vendor: 'Tesla, England' ,
        name: 'QL3G6C10B' ,
        serialNumber: '9' ,
        system: 'Storage Ring' ,
        componentType: 'Quad E' ,
        inventoryId: 493,
        typeDescription: '66mm, DBL COIL, WIDE QUAD'  
    },
    {
        installId: 464,
        vendor: 'Tesla, England' ,
        name: 'QH3G6C09B' ,
        serialNumber: '10' ,
        system: 'Storage Ring' ,
        componentType: 'Quad E' ,
        inventoryId: 494,
        typeDescription: '66mm, DBL COIL, WIDE QUAD'  
    },
    {
        installId: 192,
        vendor: 'Tesla, England' ,
        name: 'QL3G6C30B' ,
        serialNumber: '11' ,
        system: 'Storage Ring' ,
        componentType: 'Quad E' ,
        inventoryId: 495,
        typeDescription: '66mm, DBL COIL, WIDE QUAD'  
    },
    {
        installId: 224,
        vendor: 'Tesla, England' ,
        name: 'QH3G6C01B' ,
        serialNumber: '12' ,
        system: 'Storage Ring' ,
        componentType: 'Quad E' ,
        inventoryId: 496,
        typeDescription: '66mm, DBL COIL, WIDE QUAD'  
    },
    {
        installId: 312,
        vendor: 'Tesla, England' ,
        name: 'QL3G6C04B' ,
        serialNumber: '13' ,
        system: 'Storage Ring' ,
        componentType: 'Quad E' ,
        inventoryId: 497,
        typeDescription: '66mm, DBL COIL, WIDE QUAD'  
    },
    {
        installId: 884,
        vendor: 'Tesla, England' ,
        name: 'QH3G6C23B' ,
        serialNumber: '14' ,
        system: 'Storage Ring' ,
        componentType: 'Quad E' ,
        inventoryId: 498,
        typeDescription: '66mm, DBL COIL, WIDE QUAD'  
    },
    {
        installId: 252,
        vendor: 'Tesla, England' ,
        name: 'QL3G6C02B' ,
        serialNumber: '15' ,
        system: 'Storage Ring' ,
        componentType: 'Quad E' ,
        inventoryId: 499,
        typeDescription: '66mm, DBL COIL, WIDE QUAD'  
    },
    {
        installId: 344,
        vendor: 'Tesla, England' ,
        name: 'QH3G6C05B' ,
        serialNumber: '16' ,
        system: 'Storage Ring' ,
        componentType: 'Quad E' ,
        inventoryId: 500,
        typeDescription: '66mm, DBL COIL, WIDE QUAD'  
    },
    {
        installId: 432,
        vendor: 'Tesla, England' ,
        name: 'QL3G6C08B' ,
        serialNumber: '17' ,
        system: 'Storage Ring' ,
        componentType: 'Quad E' ,
        inventoryId: 501,
        typeDescription: '66mm, DBL COIL, WIDE QUAD'  
    },
    {
        installId: 284,
        vendor: 'Tesla, England' ,
        name: 'QH3G6C03B' ,
        serialNumber: '18' ,
        system: 'Storage Ring' ,
        componentType: 'Quad E' ,
        inventoryId: 502,
        typeDescription: '66mm, DBL COIL, WIDE QUAD'  
    },
    {
        installId: 552,
        vendor: 'Tesla, England' ,
        name: 'QL3G6C12B' ,
        serialNumber: '19' ,
        system: 'Storage Ring' ,
        componentType: 'Quad E' ,
        inventoryId: 503,
        typeDescription: '66mm, DBL COIL, WIDE QUAD'  
    },
    {
        installId: 584,
        vendor: 'Tesla, England' ,
        name: 'QH3G6C13B' ,
        serialNumber: '20' ,
        system: 'Storage Ring' ,
        componentType: 'Quad E' ,
        inventoryId: 504,
        typeDescription: '66mm, DBL COIL, WIDE QUAD'  
    },
    {
        installId: 612,
        vendor: 'Tesla, England' ,
        name: 'QL3G6C14B' ,
        serialNumber: '21' ,
        system: 'Storage Ring' ,
        componentType: 'Quad E' ,
        inventoryId: 505,
        typeDescription: '66mm, DBL COIL, WIDE QUAD'  
    },
    {
        installId: 644,
        vendor: 'Tesla, England' ,
        name: 'QH3G6C15B' ,
        serialNumber: '22' ,
        system: 'Storage Ring' ,
        componentType: 'Quad E' ,
        inventoryId: 506,
        typeDescription: '66mm, DBL COIL, WIDE QUAD'  
    },
    {
        installId: 524,
        vendor: 'Tesla, England' ,
        name: 'QH3G6C11B' ,
        serialNumber: '23' ,
        system: 'Storage Ring' ,
        componentType: 'Quad E' ,
        inventoryId: 507,
        typeDescription: '66mm, DBL COIL, WIDE QUAD'  
    },
    {
        installId: 792,
        vendor: 'Tesla, England' ,
        name: 'QL3G6C20B' ,
        serialNumber: '24' ,
        system: 'Storage Ring' ,
        componentType: 'Quad E' ,
        inventoryId: 508,
        typeDescription: '66mm, DBL COIL, WIDE QUAD'  
    },
    {
        installId: 732,
        vendor: 'Tesla, England' ,
        name: 'QL3G6C18B' ,
        serialNumber: '25' ,
        system: 'Storage Ring' ,
        componentType: 'Quad E' ,
        inventoryId: 509,
        typeDescription: '66mm, DBL COIL, WIDE QUAD'  
    },
    {
        installId: 672,
        vendor: 'Tesla, England' ,
        name: 'QL3G6C16B' ,
        serialNumber: '26' ,
        system: 'Storage Ring' ,
        componentType: 'Quad E' ,
        inventoryId: 510,
        typeDescription: '66mm, DBL COIL, WIDE QUAD'  
    },
    {
        installId: null,
        vendor: 'Tesla, England' ,
        name: nl,
        serialNumber: '27' ,
        system: ll,
        componentType:  Quad E' ,
        inventoryId: 511,
        typeDescription:  66mm, DBL COIL, WIDE QUAD'  
    },
    {
        installId: 824,
        vendor: 'Tesla, England' ,
        name: 'QH3G6C21B' ,
        serialNumber: '28' ,
        system: 'Storage Ring' ,
        componentType: 'Quad E' ,
        inventoryId: 512,
        typeDescription: '66mm, DBL COIL, WIDE QUAD'  
    },
    {
        installId: 852,
        vendor: 'Tesla, England' ,
        name: 'QL3G6C22B' ,
        serialNumber: '29' ,
        system: 'Storage Ring' ,
        componentType: 'Quad E' ,
        inventoryId: 513,
        typeDescription: '66mm, DBL COIL, WIDE QUAD'  
    },
    {
        installId: null,
        vendor: 'Tesla, England' ,
        name: nl,
        serialNumber: '30' ,
        system: ll,
        componentType:  Quad E' ,
        inventoryId: 514,
        typeDescription:  66mm, DBL COIL, WIDE QUAD'  
    },
    {
        installId: null,
        vendor: 'Tesla, England' ,
        name: nl,
        serialNumber: '31' ,
        system: ll,
        componentType:  Quad E' ,
        inventoryId: 515,
        typeDescription:  66mm, DBL COIL, WIDE QUAD'  
    },
    {
        installId: 764,
        vendor: 'Tesla, England' ,
        name: 'QH3G6C19B' ,
        serialNumber: '32' ,
        system: 'Storage Ring' ,
        componentType: 'Quad E' ,
        inventoryId: 516,
        typeDescription: '66mm, DBL COIL, WIDE QUAD'  
    },
    {
        installId: 1004,
        vendor: 'BINP, Russia' ,
        name: 'QH3G6C27B' ,
        serialNumber: '1' ,
        system: 'Storage Ring' ,
        componentType: 'Quad E2' ,
        inventoryId: 517,
        typeDescription: '66mm, DBL COIL, WIDE QUAD'  
    },
    {
        installId: 704,
        vendor: 'BINP, Russia' ,
        name: 'QH3G6C17B' ,
        serialNumber: '1002' ,
        system: 'Storage Ring' ,
        componentType: 'Quad E2' ,
        inventoryId: 518,
        typeDescription: '66mm, DBL COIL, WIDE QUAD'  
    },
    {
        installId: 404,
        vendor: 'BINP, Russia' ,
        name: 'QH3G6C07B' ,
        serialNumber: '1003' ,
        system: 'Storage Ring' ,
        componentType: 'Quad E2' ,
        inventoryId: 519,
        typeDescription: '66mm, DBL COIL, WIDE QUAD'  
    },
    {
        installId: null,
        vendor: 'BINP, Russia' ,
        name: nl,
        serialNumber: '1004' ,
        system: ll,
        componentType:  Quad E2' ,
        inventoryId: 520,
        typeDescription:  66mm, DBL COIL, WIDE QUAD'  
    },
    {
        installId: 742,
        vendor: 'Danfysik, Denmark' ,
        name: 'SL1G2C19A' ,
        serialNumber: '1' ,
        system: 'Storage Ring' ,
        componentType: 'Sext A' ,
        inventoryId: 521,
        typeDescription: '68mm, SHORT SEXTUPOLE'  
    },
    {
        installId: null,
        vendor: 'Danfysik, Denmark' ,
        name: nl,
        serialNumber: '2' ,
        system: ll,
        componentType:  Sext A' ,
        inventoryId: 522,
        typeDescription:  68mm, SHORT SEXTUPOLE'  
    },
    {
        installId: null,
        vendor: 'Danfysik, Denmark' ,
        name: nl,
        serialNumber: '3' ,
        system: ll,
        componentType:  Sext A' ,
        inventoryId: 523,
        typeDescription:  68mm, SHORT SEXTUPOLE'  
    },
    {
        installId: null,
        vendor: 'Danfysik, Denmark' ,
        name: nl,
        serialNumber: '4' ,
        system: ll,
        componentType:  Sext A' ,
        inventoryId: 524,
        typeDescription:  68mm, SHORT SEXTUPOLE'  
    },
    {
        installId: 745,
        vendor: 'Danfysik, Denmark' ,
        name: 'SL2G2C19A' ,
        serialNumber: '5' ,
        system: 'Storage Ring' ,
        componentType: 'Sext A' ,
        inventoryId: 525,
        typeDescription: '68mm, SHORT SEXTUPOLE'  
    },
    {
        installId: 548,
        vendor: 'Danfysik, Denmark' ,
        name: 'SM1G4C12B' ,
        serialNumber: '6' ,
        system: 'Storage Ring' ,
        componentType: 'Sext A' ,
        inventoryId: 526,
        typeDescription: '68mm, SHORT SEXTUPOLE'  
    },
    {
        installId: 1009,
        vendor: 'Danfysik, Denmark' ,
        name: 'SH1G6C27B' ,
        serialNumber: '7' ,
        system: 'Storage Ring' ,
        componentType: 'Sext A' ,
        inventoryId: 527,
        typeDescription: '68mm, SHORT SEXTUPOLE'  
    },
    {
        installId: 982,
        vendor: 'Danfysik, Denmark' ,
        name: 'SL1G2C27A' ,
        serialNumber: '8' ,
        system: 'Storage Ring' ,
        componentType: 'Sext A' ,
        inventoryId: 528,
        typeDescription: '68mm, SHORT SEXTUPOLE'  
    },
    {
        installId: 985,
        vendor: 'Danfysik, Denmark' ,
        name: 'SL2G2C27A' ,
        serialNumber: '9' ,
        system: 'Storage Ring' ,
        componentType: 'Sext A' ,
        inventoryId: 529,
        typeDescription: '68mm, SHORT SEXTUPOLE'  
    },
    {
        installId: 908,
        vendor: 'Danfysik, Denmark' ,
        name: 'SM1G4C24B' ,
        serialNumber: '10' ,
        system: 'Storage Ring' ,
        componentType: 'Sext A' ,
        inventoryId: 530,
        typeDescription: '68mm, SHORT SEXTUPOLE'  
    },
    {
        installId: 379,
        vendor: 'Danfysik, Denmark' ,
        name: 'SL1G6C06B' ,
        serialNumber: '11' ,
        system: 'Storage Ring' ,
        componentType: 'Sext A' ,
        inventoryId: 531,
        typeDescription: '68mm, SHORT SEXTUPOLE'  
    },
    {
        installId: 922,
        vendor: 'Danfysik, Denmark' ,
        name: 'SL1G2C25A' ,
        serialNumber: '12' ,
        system: 'Storage Ring' ,
        componentType: 'Sext A' ,
        inventoryId: 532,
        typeDescription: '68mm, SHORT SEXTUPOLE'  
    },
    {
        installId: 196,
        vendor: 'Danfysik, Denmark' ,
        name: 'SL2G6C30B' ,
        serialNumber: '13' ,
        system: 'Storage Ring' ,
        componentType: 'Sext A' ,
        inventoryId: 533,
        typeDescription: '68mm, SHORT SEXTUPOLE'  
    },
    {
        installId: 199,
        vendor: 'Danfysik, Denmark' ,
        name: 'SL1G6C30B' ,
        serialNumber: '14' ,
        system: 'Storage Ring' ,
        componentType: 'Sext A' ,
        inventoryId: 534,
        typeDescription: '68mm, SHORT SEXTUPOLE'  
    },
    {
        installId: 832,
        vendor: 'Danfysik, Denmark' ,
        name: 'SH1G2C22A' ,
        serialNumber: '15' ,
        system: 'Storage Ring' ,
        componentType: 'Sext A' ,
        inventoryId: 535,
        typeDescription: '68mm, SHORT SEXTUPOLE'  
    },
    {
        installId: 412,
        vendor: 'Danfysik, Denmark' ,
        name: 'SH1G2C08A' ,
        serialNumber: '16' ,
        system: 'Storage Ring' ,
        componentType: 'Sext A' ,
        inventoryId: 536,
        typeDescription: '68mm, SHORT SEXTUPOLE'  
    },
    {
        installId: 578,
        vendor: 'Danfysik, Denmark' ,
        name: 'SM1G4C13B' ,
        serialNumber: '17' ,
        system: 'Storage Ring' ,
        componentType: 'Sext A' ,
        inventoryId: 537,
        typeDescription: '68mm, SHORT SEXTUPOLE'  
    },
    {
        installId: 229,
        vendor: 'Danfysik, Denmark' ,
        name: 'SH1G6C01B' ,
        serialNumber: '18' ,
        system: 'Storage Ring' ,
        componentType: 'Sext A' ,
        inventoryId: 538,
        typeDescription: '68mm, SHORT SEXTUPOLE'  
    },
    {
        installId: 638,
        vendor: 'Danfysik, Denmark' ,
        name: 'SM1G4C15B' ,
        serialNumber: '19' ,
        system: 'Storage Ring' ,
        componentType: 'Sext A' ,
        inventoryId: 539,
        typeDescription: '68mm, SHORT SEXTUPOLE'  
    },
    {
        installId: 925,
        vendor: 'Danfysik, Denmark' ,
        name: 'SL2G2C25A' ,
        serialNumber: '20' ,
        system: 'Storage Ring' ,
        componentType: 'Sext A' ,
        inventoryId: 540,
        typeDescription: '68mm, SHORT SEXTUPOLE'  
    },
    {
        installId: 916,
        vendor: 'Danfysik, Denmark' ,
        name: 'SL2G6C24B' ,
        serialNumber: '21' ,
        system: 'Storage Ring' ,
        componentType: 'Sext A' ,
        inventoryId: 541,
        typeDescription: '68mm, SHORT SEXTUPOLE'  
    },
    {
        installId: 919,
        vendor: 'Danfysik, Denmark' ,
        name: 'SL1G6C24B' ,
        serialNumber: '22' ,
        system: 'Storage Ring' ,
        componentType: 'Sext A' ,
        inventoryId: 542,
        typeDescription: '68mm, SHORT SEXTUPOLE'  
    },
    {
        installId: 938,
        vendor: 'Danfysik, Denmark' ,
        name: 'SM1G4C25B' ,
        serialNumber: '23' ,
        system: 'Storage Ring' ,
        componentType: 'Sext A' ,
        inventoryId: 543,
        typeDescription: '68mm, SHORT SEXTUPOLE'  
    },
    {
        installId: 968,
        vendor: 'Danfysik, Denmark' ,
        name: 'SM1G4C26B' ,
        serialNumber: '24' ,
        system: 'Storage Ring' ,
        componentType: 'Sext A' ,
        inventoryId: 544,
        typeDescription: '68mm, SHORT SEXTUPOLE'  
    },
    {
        installId: 928,
        vendor: 'Danfysik, Denmark' ,
        name: 'SL3G2C25A' ,
        serialNumber: '25' ,
        system: 'Storage Ring' ,
        componentType: 'Sext A' ,
        inventoryId: 545,
        typeDescription: '68mm, SHORT SEXTUPOLE'  
    },
    {
        installId: 248,
        vendor: 'Danfysik, Denmark' ,
        name: 'SM1G4C02B' ,
        serialNumber: '26' ,
        system: 'Storage Ring' ,
        componentType: 'Sext A' ,
        inventoryId: 546,
        typeDescription: '68mm, SHORT SEXTUPOLE'  
    },
    {
        installId: 278,
        vendor: 'Danfysik, Denmark' ,
        name: 'SM1G4C03B' ,
        serialNumber: '27' ,
        system: 'Storage Ring' ,
        componentType: 'Sext A' ,
        inventoryId: 547,
        typeDescription: '68mm, SHORT SEXTUPOLE'  
    },
    {
        installId: 1058,
        vendor: 'Danfysik, Denmark' ,
        name: 'SM1G4C29B' ,
        serialNumber: '28' ,
        system: 'Storage Ring' ,
        componentType: 'Sext A' ,
        inventoryId: 548,
        typeDescription: '68mm, SHORT SEXTUPOLE'  
    },
    {
        installId: 338,
        vendor: 'Danfysik, Denmark' ,
        name: 'SM1G4C05B' ,
        serialNumber: '29' ,
        system: 'Storage Ring' ,
        componentType: 'Sext A' ,
        inventoryId: 549,
        typeDescription: '68mm, SHORT SEXTUPOLE'  
    },
    {
        installId: 308,
        vendor: 'Danfysik, Denmark' ,
        name: 'SM1G4C04B' ,
        serialNumber: '30' ,
        system: 'Storage Ring' ,
        componentType: 'Sext A' ,
        inventoryId: 550,
        typeDescription: '68mm, SHORT SEXTUPOLE'  
    },
    {
        installId: 368,
        vendor: 'Danfysik, Denmark' ,
        name: 'SM1G4C06B' ,
        serialNumber: '31' ,
        system: 'Storage Ring' ,
        componentType: 'Sext A' ,
        inventoryId: 551,
        typeDescription: '68mm, SHORT SEXTUPOLE'  
    },
    {
        installId: 458,
        vendor: 'Danfysik, Denmark' ,
        name: 'SM1G4C09B' ,
        serialNumber: '32' ,
        system: 'Storage Ring' ,
        componentType: 'Sext A' ,
        inventoryId: 552,
        typeDescription: '68mm, SHORT SEXTUPOLE'  
    },
    {
        installId: 952,
        vendor: 'Danfysik, Denmark' ,
        name: 'SH1G2C26A' ,
        serialNumber: '33' ,
        system: 'Storage Ring' ,
        componentType: 'Sext A' ,
        inventoryId: 553,
        typeDescription: '68mm, SHORT SEXTUPOLE'  
    },
    {
        installId: 956,
        vendor: 'Danfysik, Denmark' ,
        name: 'SH3G2C26A' ,
        serialNumber: '34' ,
        system: 'Storage Ring' ,
        componentType: 'Sext A' ,
        inventoryId: 554,
        typeDescription: '68mm, SHORT SEXTUPOLE'  
    },
    {
        installId: 958,
        vendor: 'Danfysik, Denmark' ,
        name: 'SH4G2C26A' ,
        serialNumber: '35' ,
        system: 'Storage Ring' ,
        componentType: 'Sext A' ,
        inventoryId: 555,
        typeDescription: '68mm, SHORT SEXTUPOLE'  
    },
    {
        installId: 1069,
        vendor: 'Danfysik, Denmark' ,
        name: 'SH1G6C29B' ,
        serialNumber: '36' ,
        system: 'Storage Ring' ,
        componentType: 'Sext A' ,
        inventoryId: 556,
        typeDescription: '68mm, SHORT SEXTUPOLE'  
    },
    {
        installId: 1042,
        vendor: 'Danfysik, Denmark' ,
        name: 'SL1G2C29A' ,
        serialNumber: '37' ,
        system: 'Storage Ring' ,
        componentType: 'Sext A' ,
        inventoryId: 557,
        typeDescription: '68mm, SHORT SEXTUPOLE'  
    },
    {
        installId: 256,
        vendor: 'Danfysik, Denmark' ,
        name: 'SL2G6C02B' ,
        serialNumber: '38' ,
        system: 'Storage Ring' ,
        componentType: 'Sext A' ,
        inventoryId: 558,
        typeDescription: '68mm, SHORT SEXTUPOLE'  
    },
    {
        installId: 1045,
        vendor: 'Danfysik, Denmark' ,
        name: 'SL2G2C29A' ,
        serialNumber: '39' ,
        system: 'Storage Ring' ,
        componentType: 'Sext A' ,
        inventoryId: 559,
        typeDescription: '68mm, SHORT SEXTUPOLE'  
    },
    {
        installId: 1048,
        vendor: 'Danfysik, Denmark' ,
        name: 'SL3G2C29A' ,
        serialNumber: '40' ,
        system: 'Storage Ring' ,
        componentType: 'Sext A' ,
        inventoryId: 560,
        typeDescription: '68mm, SHORT SEXTUPOLE'  
    },
    {
        installId: 496,
        vendor: 'Danfysik, Denmark' ,
        name: 'SL2G6C10B' ,
        serialNumber: '41' ,
        system: 'Storage Ring' ,
        componentType: 'Sext A' ,
        inventoryId: 561,
        typeDescription: '68mm, SHORT SEXTUPOLE'  
    },
    {
        installId: 499,
        vendor: 'Danfysik, Denmark' ,
        name: 'SL1G6C10B' ,
        serialNumber: '42' ,
        system: 'Storage Ring' ,
        componentType: 'Sext A' ,
        inventoryId: 562,
        typeDescription: '68mm, SHORT SEXTUPOLE'  
    },
    {
        installId: 445,
        vendor: 'Danfysik, Denmark' ,
        name: 'SL2G2C09A' ,
        serialNumber: '43' ,
        system: 'Storage Ring' ,
        componentType: 'Sext A' ,
        inventoryId: 563,
        typeDescription: '68mm, SHORT SEXTUPOLE'  
    },
    {
        installId: 448,
        vendor: 'Danfysik, Denmark' ,
        name: 'SL3G2C09A' ,
        serialNumber: '44' ,
        system: 'Storage Ring' ,
        componentType: 'Sext A' ,
        inventoryId: 564,
        typeDescription: '68mm, SHORT SEXTUPOLE'  
    },
    {
        installId: 518,
        vendor: 'Danfysik, Denmark' ,
        name: 'SM1G4C11B' ,
        serialNumber: '45' ,
        system: 'Storage Ring' ,
        componentType: 'Sext A' ,
        inventoryId: 565,
        typeDescription: '68mm, SHORT SEXTUPOLE'  
    },
    {
        installId: 352,
        vendor: 'Danfysik, Denmark' ,
        name: 'SH1G2C06A' ,
        serialNumber: '46' ,
        system: 'Storage Ring' ,
        componentType: 'Sext A' ,
        inventoryId: 566,
        typeDescription: '68mm, SHORT SEXTUPOLE'  
    },
    {
        installId: 608,
        vendor: 'Danfysik, Denmark' ,
        name: 'SM1G4C14B' ,
        serialNumber: '47' ,
        system: 'Storage Ring' ,
        componentType: 'Sext A' ,
        inventoryId: 567,
        typeDescription: '68mm, SHORT SEXTUPOLE'  
    },
    {
        installId: 469,
        vendor: 'Danfysik, Denmark' ,
        name: 'SH1G6C09B' ,
        serialNumber: '48' ,
        system: 'Storage Ring' ,
        componentType: 'Sext A' ,
        inventoryId: 568,
        typeDescription: '68mm, SHORT SEXTUPOLE'  
    },
    {
        installId: 668,
        vendor: 'Danfysik, Denmark' ,
        name: 'SM1G4C16B' ,
        serialNumber: '49' ,
        system: 'Storage Ring' ,
        componentType: 'Sext A' ,
        inventoryId: 569,
        typeDescription: '68mm, SHORT SEXTUPOLE'  
    },
    {
        installId: 949,
        vendor: 'Danfysik, Denmark' ,
        name: 'SH1G6C25B' ,
        serialNumber: '50' ,
        system: 'Storage Ring' ,
        componentType: 'Sext A' ,
        inventoryId: 570,
        typeDescription: '68mm, SHORT SEXTUPOLE'  
    },
    {
        installId: 976,
        vendor: 'Danfysik, Denmark' ,
        name: 'SL2G6C26B' ,
        serialNumber: '51' ,
        system: 'Storage Ring' ,
        componentType: 'Sext A' ,
        inventoryId: 571,
        typeDescription: '68mm, SHORT SEXTUPOLE'  
    },
    {
        installId: 979,
        vendor: 'Danfysik, Denmark' ,
        name: 'SL1G6C26B' ,
        serialNumber: '52' ,
        system: 'Storage Ring' ,
        componentType: 'Sext A' ,
        inventoryId: 572,
        typeDescription: '68mm, SHORT SEXTUPOLE'  
    },
    {
        installId: 878,
        vendor: 'Danfysik, Denmark' ,
        name: 'SM1G4C23B' ,
        serialNumber: '53' ,
        system: 'Storage Ring' ,
        componentType: 'Sext A' ,
        inventoryId: 573,
        typeDescription: '68mm, SHORT SEXTUPOLE'  
    },
    {
        installId: 1036,
        vendor: 'Danfysik, Denmark' ,
        name: 'SL2G6C28B' ,
        serialNumber: '54' ,
        system: 'Storage Ring' ,
        componentType: 'Sext A' ,
        inventoryId: 574,
        typeDescription: '68mm, SHORT SEXTUPOLE'  
    },
    {
        installId: 1039,
        vendor: 'Danfysik, Denmark' ,
        name: 'SL1G6C28B' ,
        serialNumber: '55' ,
        system: 'Storage Ring' ,
        componentType: 'Sext A' ,
        inventoryId: 575,
        typeDescription: '68mm, SHORT SEXTUPOLE'  
    },
    {
        installId: 488,
        vendor: 'Danfysik, Denmark' ,
        name: 'SM1G4C10B' ,
        serialNumber: '56' ,
        system: 'Storage Ring' ,
        componentType: 'Sext A' ,
        inventoryId: 576,
        typeDescription: '68mm, SHORT SEXTUPOLE'  
    },
    {
        installId: 356,
        vendor: 'Danfysik, Denmark' ,
        name: 'SH3G2C06A' ,
        serialNumber: '57' ,
        system: 'Storage Ring' ,
        componentType: 'Sext A' ,
        inventoryId: 577,
        typeDescription: '68mm, SHORT SEXTUPOLE'  
    },
    {
        installId: 358,
        vendor: 'Danfysik, Denmark' ,
        name: 'SH4G2C06A' ,
        serialNumber: '58' ,
        system: 'Storage Ring' ,
        componentType: 'Sext A' ,
        inventoryId: 578,
        typeDescription: '68mm, SHORT SEXTUPOLE'  
    },
    {
        installId: 988,
        vendor: 'Danfysik, Denmark' ,
        name: 'SL3G2C27A' ,
        serialNumber: '59' ,
        system: 'Storage Ring' ,
        componentType: 'Sext A' ,
        inventoryId: 579,
        typeDescription: '68mm, SHORT SEXTUPOLE'  
    },
    {
        installId: 376,
        vendor: 'Danfysik, Denmark' ,
        name: 'SL2G6C06B' ,
        serialNumber: '60' ,
        system: 'Storage Ring' ,
        componentType: 'Sext A' ,
        inventoryId: 580,
        typeDescription: '68mm, SHORT SEXTUPOLE'  
    },
    {
        installId: 998,
        vendor: 'Danfysik, Denmark' ,
        name: 'SM1G4C27B' ,
        serialNumber: '61' ,
        system: 'Storage Ring' ,
        componentType: 'Sext A' ,
        inventoryId: 581,
        typeDescription: '68mm, SHORT SEXTUPOLE'  
    },
    {
        installId: 1028,
        vendor: 'Danfysik, Denmark' ,
        name: 'SM1G4C28B' ,
        serialNumber: '62' ,
        system: 'Storage Ring' ,
        componentType: 'Sext A' ,
        inventoryId: 582,
        typeDescription: '68mm, SHORT SEXTUPOLE'  
    },
    {
        installId: 442,
        vendor: 'Danfysik, Denmark' ,
        name: 'SL1G2C09A' ,
        serialNumber: '63' ,
        system: 'Storage Ring' ,
        componentType: 'Sext A' ,
        inventoryId: 583,
        typeDescription: '68mm, SHORT SEXTUPOLE'  
    },
    {
        installId: 259,
        vendor: 'Danfysik, Denmark' ,
        name: 'SL1G6C02B' ,
        serialNumber: '64' ,
        system: 'Storage Ring' ,
        componentType: 'Sext A' ,
        inventoryId: 584,
        typeDescription: '68mm, SHORT SEXTUPOLE'  
    },
    {
        installId: 398,
        vendor: 'Danfysik, Denmark' ,
        name: 'SM1G4C07B' ,
        serialNumber: '65' ,
        system: 'Storage Ring' ,
        componentType: 'Sext A' ,
        inventoryId: 585,
        typeDescription: '68mm, SHORT SEXTUPOLE'  
    },
    {
        installId: 428,
        vendor: 'Danfysik, Denmark' ,
        name: 'SM1G4C08B' ,
        serialNumber: '66' ,
        system: 'Storage Ring' ,
        componentType: 'Sext A' ,
        inventoryId: 586,
        typeDescription: '68mm, SHORT SEXTUPOLE'  
    },
    {
        installId: 232,
        vendor: 'Danfysik, Denmark' ,
        name: 'SH1G2C02A' ,
        serialNumber: '67' ,
        system: 'Storage Ring' ,
        componentType: 'Sext A' ,
        inventoryId: 587,
        typeDescription: '68mm, SHORT SEXTUPOLE'  
    },
    {
        installId: 236,
        vendor: 'Danfysik, Denmark' ,
        name: 'SH3G2C02A' ,
        serialNumber: '68' ,
        system: 'Storage Ring' ,
        componentType: 'Sext A' ,
        inventoryId: 588,
        typeDescription: '68mm, SHORT SEXTUPOLE'  
    },
    {
        installId: 238,
        vendor: 'Danfysik, Denmark' ,
        name: 'SH4G2C02A' ,
        serialNumber: '69' ,
        system: 'Storage Ring' ,
        componentType: 'Sext A' ,
        inventoryId: 589,
        typeDescription: '68mm, SHORT SEXTUPOLE'  
    },
    {
        installId: 1012,
        vendor: 'Danfysik, Denmark' ,
        name: 'SH1G2C28A' ,
        serialNumber: '70' ,
        system: 'Storage Ring' ,
        componentType: 'Sext A' ,
        inventoryId: 590,
        typeDescription: '68mm, SHORT SEXTUPOLE'  
    },
    {
        installId: 1016,
        vendor: 'Danfysik, Denmark' ,
        name: 'SH3G2C28A' ,
        serialNumber: '71' ,
        system: 'Storage Ring' ,
        componentType: 'Sext A' ,
        inventoryId: 591,
        typeDescription: '68mm, SHORT SEXTUPOLE'  
    },
    {
        installId: 1018,
        vendor: 'Danfysik, Denmark' ,
        name: 'SH4G2C28A' ,
        serialNumber: '72' ,
        system: 'Storage Ring' ,
        componentType: 'Sext A' ,
        inventoryId: 592,
        typeDescription: '68mm, SHORT SEXTUPOLE'  
    },
    {
        installId: 802,
        vendor: 'Danfysik, Denmark' ,
        name: 'SL1G2C21A' ,
        serialNumber: '73' ,
        system: 'Storage Ring' ,
        componentType: 'Sext A' ,
        inventoryId: 593,
        typeDescription: '68mm, SHORT SEXTUPOLE'  
    },
    {
        installId: 202,
        vendor: 'Danfysik, Denmark' ,
        name: 'SL1G2C01A' ,
        serialNumber: '74' ,
        system: 'Storage Ring' ,
        componentType: 'Sext A' ,
        inventoryId: 594,
        typeDescription: '68mm, SHORT SEXTUPOLE'  
    },
    {
        installId: 322,
        vendor: 'Danfysik, Denmark' ,
        name: 'SL1G2C05A' ,
        serialNumber: '75' ,
        system: 'Storage Ring' ,
        componentType: 'Sext A' ,
        inventoryId: 595,
        typeDescription: '68mm, SHORT SEXTUPOLE'  
    },
    {
        installId: 325,
        vendor: 'Danfysik, Denmark' ,
        name: 'SL2G2C05A' ,
        serialNumber: '76' ,
        system: 'Storage Ring' ,
        componentType: 'Sext A' ,
        inventoryId: 596,
        typeDescription: '68mm, SHORT SEXTUPOLE'  
    },
    {
        installId: 436,
        vendor: 'Danfysik, Denmark' ,
        name: 'SL2G6C08B' ,
        serialNumber: '77' ,
        system: 'Storage Ring' ,
        componentType: 'Sext A' ,
        inventoryId: 597,
        typeDescription: '68mm, SHORT SEXTUPOLE'  
    },
    {
        installId: 439,
        vendor: 'Danfysik, Denmark' ,
        name: 'SL1G6C08B' ,
        serialNumber: '78' ,
        system: 'Storage Ring' ,
        componentType: 'Sext A' ,
        inventoryId: 598,
        typeDescription: '68mm, SHORT SEXTUPOLE'  
    },
    {
        installId: 172,
        vendor: 'Danfysik, Denmark' ,
        name: 'SH1G2C30A' ,
        serialNumber: '79' ,
        system: 'Storage Ring' ,
        componentType: 'Sext A' ,
        inventoryId: 599,
        typeDescription: '68mm, SHORT SEXTUPOLE'  
    },
    {
        installId: 556,
        vendor: 'Danfysik, Denmark' ,
        name: 'SL2G6C12B' ,
        serialNumber: '80' ,
        system: 'Storage Ring' ,
        componentType: 'Sext A' ,
        inventoryId: 600,
        typeDescription: '68mm, SHORT SEXTUPOLE'  
    },
    {
        installId: 205,
        vendor: 'Danfysik, Denmark' ,
        name: 'SL2G2C01A' ,
        serialNumber: '81' ,
        system: 'Storage Ring' ,
        componentType: 'Sext A' ,
        inventoryId: 601,
        typeDescription: '68mm, SHORT SEXTUPOLE'  
    },
    {
        installId: 559,
        vendor: 'Danfysik, Denmark' ,
        name: 'SL1G6C12B' ,
        serialNumber: '82' ,
        system: 'Storage Ring' ,
        componentType: 'Sext A' ,
        inventoryId: 602,
        typeDescription: '68mm, SHORT SEXTUPOLE'  
    },
    {
        installId: 176,
        vendor: 'Danfysik, Denmark' ,
        name: 'SH3G2C30A' ,
        serialNumber: '83' ,
        system: 'Storage Ring' ,
        componentType: 'Sext A' ,
        inventoryId: 603,
        typeDescription: '68mm, SHORT SEXTUPOLE'  
    },
    {
        installId: 208,
        vendor: 'Danfysik, Denmark' ,
        name: 'SL3G2C01A' ,
        serialNumber: '84' ,
        system: 'Storage Ring' ,
        componentType: 'Sext A' ,
        inventoryId: 604,
        typeDescription: '68mm, SHORT SEXTUPOLE'  
    },
    {
        installId: 178,
        vendor: 'Danfysik, Denmark' ,
        name: 'SH4G2C30A' ,
        serialNumber: '85' ,
        system: 'Storage Ring' ,
        componentType: 'Sext A' ,
        inventoryId: 605,
        typeDescription: '68mm, SHORT SEXTUPOLE'  
    },
    {
        installId: 316,
        vendor: 'Danfysik, Denmark' ,
        name: 'SL2G6C04B' ,
        serialNumber: '86' ,
        system: 'Storage Ring' ,
        componentType: 'Sext A' ,
        inventoryId: 606,
        typeDescription: '68mm, SHORT SEXTUPOLE'  
    },
    {
        installId: 319,
        vendor: 'Danfysik, Denmark' ,
        name: 'SL1G6C04B' ,
        serialNumber: '87' ,
        system: 'Storage Ring' ,
        componentType: 'Sext A' ,
        inventoryId: 607,
        typeDescription: '68mm, SHORT SEXTUPOLE'  
    },
    {
        installId: 836,
        vendor: 'Danfysik, Denmark' ,
        name: 'SH3G2C22A' ,
        serialNumber: '88' ,
        system: 'Storage Ring' ,
        componentType: 'Sext A' ,
        inventoryId: 608,
        typeDescription: '68mm, SHORT SEXTUPOLE'  
    },
    {
        installId: 622,
        vendor: 'Danfysik, Denmark' ,
        name: 'SL1G2C15A' ,
        serialNumber: '89' ,
        system: 'Storage Ring' ,
        componentType: 'Sext A' ,
        inventoryId: 609,
        typeDescription: '68mm, SHORT SEXTUPOLE'  
    },
    {
        installId: 416,
        vendor: 'Danfysik, Denmark' ,
        name: 'SH3G2C08A' ,
        serialNumber: '90' ,
        system: 'Storage Ring' ,
        componentType: 'Sext A' ,
        inventoryId: 610,
        typeDescription: '68mm, SHORT SEXTUPOLE'  
    },
    {
        installId: 788,
        vendor: 'Danfysik, Denmark' ,
        name: 'SM1G4C20B' ,
        serialNumber: '91' ,
        system: 'Storage Ring' ,
        componentType: 'Sext A' ,
        inventoryId: 611,
        typeDescription: '68mm, SHORT SEXTUPOLE'  
    },
    {
        installId: 409,
        vendor: 'Danfysik, Denmark' ,
        name: 'SH1G6C07B' ,
        serialNumber: '92' ,
        system: 'Storage Ring' ,
        componentType: 'Sext A' ,
        inventoryId: 612,
        typeDescription: '68mm, SHORT SEXTUPOLE'  
    },
    {
        installId: 829,
        vendor: 'Danfysik, Denmark' ,
        name: 'SH1G6C21B' ,
        serialNumber: '93' ,
        system: 'Storage Ring' ,
        componentType: 'Sext A' ,
        inventoryId: 613,
        typeDescription: '68mm, SHORT SEXTUPOLE'  
    },
    {
        installId: 268,
        vendor: 'Danfysik, Denmark' ,
        name: 'SL3G2C03A' ,
        serialNumber: '94' ,
        system: 'Storage Ring' ,
        componentType: 'Sext A' ,
        inventoryId: 614,
        typeDescription: '68mm, SHORT SEXTUPOLE'  
    },
    {
        installId: 265,
        vendor: 'Danfysik, Denmark' ,
        name: 'SL2G2C03A' ,
        serialNumber: '95' ,
        system: 'Storage Ring' ,
        componentType: 'Sext A' ,
        inventoryId: 615,
        typeDescription: '68mm, SHORT SEXTUPOLE'  
    },
    {
        installId: 262,
        vendor: 'Danfysik, Denmark' ,
        name: 'SL1G2C03A' ,
        serialNumber: '96' ,
        system: 'Storage Ring' ,
        componentType: 'Sext A' ,
        inventoryId: 616,
        typeDescription: '68mm, SHORT SEXTUPOLE'  
    },
    {
        installId: 418,
        vendor: 'Danfysik, Denmark' ,
        name: 'SH4G2C08A' ,
        serialNumber: '97' ,
        system: 'Storage Ring' ,
        componentType: 'Sext A' ,
        inventoryId: 617,
        typeDescription: '68mm, SHORT SEXTUPOLE'  
    },
    {
        installId: 382,
        vendor: 'Danfysik, Denmark' ,
        name: 'SL1G2C07A' ,
        serialNumber: '98' ,
        system: 'Storage Ring' ,
        componentType: 'Sext A' ,
        inventoryId: 618,
        typeDescription: '68mm, SHORT SEXTUPOLE'  
    },
    {
        installId: 385,
        vendor: 'Danfysik, Denmark' ,
        name: 'SL2G2C07A' ,
        serialNumber: '99' ,
        system: 'Storage Ring' ,
        componentType: 'Sext A' ,
        inventoryId: 619,
        typeDescription: '68mm, SHORT SEXTUPOLE'  
    },
    {
        installId: 349,
        vendor: 'Danfysik, Denmark' ,
        name: 'SH1G6C05B' ,
        serialNumber: '100' ,
        system: 'Storage Ring' ,
        componentType: 'Sext A' ,
        inventoryId: 620,
        typeDescription: '68mm, SHORT SEXTUPOLE'  
    },
    {
        installId: 889,
        vendor: 'Danfysik, Denmark' ,
        name: 'SH1G6C23B' ,
        serialNumber: '101' ,
        system: 'Storage Ring' ,
        componentType: 'Sext A' ,
        inventoryId: 621,
        typeDescription: '68mm, SHORT SEXTUPOLE'  
    },
    {
        installId: 862,
        vendor: 'Danfysik, Denmark' ,
        name: 'SL1G2C23A' ,
        serialNumber: '102' ,
        system: 'Storage Ring' ,
        componentType: 'Sext A' ,
        inventoryId: 622,
        typeDescription: '68mm, SHORT SEXTUPOLE'  
    },
    {
        installId: 388,
        vendor: 'Danfysik, Denmark' ,
        name: 'SL3G2C07A' ,
        serialNumber: '103' ,
        system: 'Storage Ring' ,
        componentType: 'Sext A' ,
        inventoryId: 623,
        typeDescription: '68mm, SHORT SEXTUPOLE'  
    },
    {
        installId: 328,
        vendor: 'Danfysik, Denmark' ,
        name: 'SL3G2C05A' ,
        serialNumber: '104' ,
        system: 'Storage Ring' ,
        componentType: 'Sext A' ,
        inventoryId: 624,
        typeDescription: '68mm, SHORT SEXTUPOLE'  
    },
    {
        installId: 865,
        vendor: 'Danfysik, Denmark' ,
        name: 'SL2G2C23A' ,
        serialNumber: '105' ,
        system: 'Storage Ring' ,
        componentType: 'Sext A' ,
        inventoryId: 625,
        typeDescription: '68mm, SHORT SEXTUPOLE'  
    },
    {
        installId: 848,
        vendor: 'Danfysik, Denmark' ,
        name: 'SM1G4C22B' ,
        serialNumber: '106' ,
        system: 'Storage Ring' ,
        componentType: 'Sext A' ,
        inventoryId: 626,
        typeDescription: '68mm, SHORT SEXTUPOLE'  
    },
    {
        installId: 868,
        vendor: 'Danfysik, Denmark' ,
        name: 'SL3G2C23A' ,
        serialNumber: '107' ,
        system: 'Storage Ring' ,
        componentType: 'Sext A' ,
        inventoryId: 627,
        typeDescription: '68mm, SHORT SEXTUPOLE'  
    },
    {
        installId: 536,
        vendor: 'Danfysik, Denmark' ,
        name: 'SH3G2C12A' ,
        serialNumber: '108' ,
        system: 'Storage Ring' ,
        componentType: 'Sext A' ,
        inventoryId: 628,
        typeDescription: '68mm, SHORT SEXTUPOLE'  
    },
    {
        installId: 538,
        vendor: 'Danfysik, Denmark' ,
        name: 'SH4G2C12A' ,
        serialNumber: '109' ,
        system: 'Storage Ring' ,
        componentType: 'Sext A' ,
        inventoryId: 629,
        typeDescription: '68mm, SHORT SEXTUPOLE'  
    },
    {
        installId: 502,
        vendor: 'Danfysik, Denmark' ,
        name: 'SL1G2C11A' ,
        serialNumber: '110' ,
        system: 'Storage Ring' ,
        componentType: 'Sext A' ,
        inventoryId: 630,
        typeDescription: '68mm, SHORT SEXTUPOLE'  
    },
    {
        installId: 505,
        vendor: 'Danfysik, Denmark' ,
        name: 'SL2G2C11A' ,
        serialNumber: '111' ,
        system: 'Storage Ring' ,
        componentType: 'Sext A' ,
        inventoryId: 631,
        typeDescription: '68mm, SHORT SEXTUPOLE'  
    },
    {
        installId: 508,
        vendor: 'Danfysik, Denmark' ,
        name: 'SL3G2C11A' ,
        serialNumber: '112' ,
        system: 'Storage Ring' ,
        componentType: 'Sext A' ,
        inventoryId: 632,
        typeDescription: '68mm, SHORT SEXTUPOLE'  
    },
    {
        installId: 652,
        vendor: 'Danfysik, Denmark' ,
        name: 'SH1G2C16A' ,
        serialNumber: '113' ,
        system: 'Storage Ring' ,
        componentType: 'Sext A' ,
        inventoryId: 633,
        typeDescription: '68mm, SHORT SEXTUPOLE'  
    },
    {
        installId: 562,
        vendor: 'Danfysik, Denmark' ,
        name: 'SL1G2C13A' ,
        serialNumber: '114' ,
        system: 'Storage Ring' ,
        componentType: 'Sext A' ,
        inventoryId: 634,
        typeDescription: '68mm, SHORT SEXTUPOLE'  
    },
    {
        installId: 565,
        vendor: 'Danfysik, Denmark' ,
        name: 'SL2G2C13A' ,
        serialNumber: '115' ,
        system: 'Storage Ring' ,
        componentType: 'Sext A' ,
        inventoryId: 635,
        typeDescription: '68mm, SHORT SEXTUPOLE'  
    },
    {
        installId: 736,
        vendor: 'Danfysik, Denmark' ,
        name: 'SL2G6C18B' ,
        serialNumber: '116' ,
        system: 'Storage Ring' ,
        componentType: 'Sext A' ,
        inventoryId: 636,
        typeDescription: '68mm, SHORT SEXTUPOLE'  
    },
    {
        installId: 698,
        vendor: 'Danfysik, Denmark' ,
        name: 'SM1G4C17B' ,
        serialNumber: '117' ,
        system: 'Storage Ring' ,
        componentType: 'Sext A' ,
        inventoryId: 637,
        typeDescription: '68mm, SHORT SEXTUPOLE'  
    },
    {
        installId: 682,
        vendor: 'Danfysik, Denmark' ,
        name: 'SL1G2C17A' ,
        serialNumber: '118' ,
        system: 'Storage Ring' ,
        componentType: 'Sext A' ,
        inventoryId: 638,
        typeDescription: '68mm, SHORT SEXTUPOLE'  
    },
    {
        installId: 805,
        vendor: 'Danfysik, Denmark' ,
        name: 'SL2G2C21A' ,
        serialNumber: '119' ,
        system: 'Storage Ring' ,
        componentType: 'Sext A' ,
        inventoryId: 639,
        typeDescription: '68mm, SHORT SEXTUPOLE'  
    },
    {
        installId: 529,
        vendor: 'Danfysik, Denmark' ,
        name: 'SH1G6C11B' ,
        serialNumber: '120' ,
        system: 'Storage Ring' ,
        componentType: 'Sext A' ,
        inventoryId: 640,
        typeDescription: '68mm, SHORT SEXTUPOLE'  
    },
    {
        installId: 685,
        vendor: 'Danfysik, Denmark' ,
        name: 'SL2G2C17A' ,
        serialNumber: '121' ,
        system: 'Storage Ring' ,
        componentType: 'Sext A' ,
        inventoryId: 641,
        typeDescription: '68mm, SHORT SEXTUPOLE'  
    },
    {
        installId: 656,
        vendor: 'Danfysik, Denmark' ,
        name: 'SH3G2C16A' ,
        serialNumber: '122' ,
        system: 'Storage Ring' ,
        componentType: 'Sext A' ,
        inventoryId: 642,
        typeDescription: '68mm, SHORT SEXTUPOLE'  
    },
    {
        installId: 818,
        vendor: 'Danfysik, Denmark' ,
        name: 'SM1G4C21B' ,
        serialNumber: '123' ,
        system: 'Storage Ring' ,
        componentType: 'Sext A' ,
        inventoryId: 643,
        typeDescription: '68mm, SHORT SEXTUPOLE'  
    },
    {
        installId: 532,
        vendor: 'Danfysik, Denmark' ,
        name: 'SH1G2C12A' ,
        serialNumber: '124' ,
        system: 'Storage Ring' ,
        componentType: 'Sext A' ,
        inventoryId: 644,
        typeDescription: '68mm, SHORT SEXTUPOLE'  
    },
    {
        installId: 808,
        vendor: 'Danfysik, Denmark' ,
        name: 'SL3G2C21A' ,
        serialNumber: '125' ,
        system: 'Storage Ring' ,
        componentType: 'Sext A' ,
        inventoryId: 645,
        typeDescription: '68mm, SHORT SEXTUPOLE'  
    },
    {
        installId: 592,
        vendor: 'Danfysik, Denmark' ,
        name: 'SH1G2C14A' ,
        serialNumber: '126' ,
        system: 'Storage Ring' ,
        componentType: 'Sext A' ,
        inventoryId: 646,
        typeDescription: '68mm, SHORT SEXTUPOLE'  
    },
    {
        installId: 739,
        vendor: 'Danfysik, Denmark' ,
        name: 'SL1G6C18B' ,
        serialNumber: '127' ,
        system: 'Storage Ring' ,
        componentType: 'Sext A' ,
        inventoryId: 647,
        typeDescription: '68mm, SHORT SEXTUPOLE'  
    },
    {
        installId: 596,
        vendor: 'Danfysik, Denmark' ,
        name: 'SH3G2C14A' ,
        serialNumber: '128' ,
        system: 'Storage Ring' ,
        componentType: 'Sext A' ,
        inventoryId: 648,
        typeDescription: '68mm, SHORT SEXTUPOLE'  
    },
    {
        installId: 712,
        vendor: 'Danfysik, Denmark' ,
        name: 'SH1G2C18A' ,
        serialNumber: '129' ,
        system: 'Storage Ring' ,
        componentType: 'Sext A' ,
        inventoryId: 649,
        typeDescription: '68mm, SHORT SEXTUPOLE'  
    },
    {
        installId: 796,
        vendor: 'Danfysik, Denmark' ,
        name: 'SL2G6C20B' ,
        serialNumber: '130' ,
        system: 'Storage Ring' ,
        componentType: 'Sext A' ,
        inventoryId: 650,
        typeDescription: '68mm, SHORT SEXTUPOLE'  
    },
    {
        installId: 598,
        vendor: 'Danfysik, Denmark' ,
        name: 'SH4G2C14A' ,
        serialNumber: '131' ,
        system: 'Storage Ring' ,
        componentType: 'Sext A' ,
        inventoryId: 651,
        typeDescription: '68mm, SHORT SEXTUPOLE'  
    },
    {
        installId: 649,
        vendor: 'Danfysik, Denmark' ,
        name: 'SH1G6C15B' ,
        serialNumber: '132' ,
        system: 'Storage Ring' ,
        componentType: 'Sext A' ,
        inventoryId: 652,
        typeDescription: '68mm, SHORT SEXTUPOLE'  
    },
    {
        installId: 213,
        vendor: 'Danfysik, Denmark' ,
        name: 'SM1G4C01A' ,
        serialNumber: '133' ,
        system: 'Storage Ring' ,
        componentType: 'Sext A' ,
        inventoryId: 653,
        typeDescription: '68mm, SHORT SEXTUPOLE'  
    },
    {
        installId: 218,
        vendor: 'Danfysik, Denmark' ,
        name: 'SM1G4C01B' ,
        serialNumber: '134' ,
        system: 'Storage Ring' ,
        componentType: 'Sext A' ,
        inventoryId: 654,
        typeDescription: '68mm, SHORT SEXTUPOLE'  
    },
    {
        installId: 292,
        vendor: 'Danfysik, Denmark' ,
        name: 'SH1G2C04A' ,
        serialNumber: '135' ,
        system: 'Storage Ring' ,
        componentType: 'Sext A' ,
        inventoryId: 655,
        typeDescription: '68mm, SHORT SEXTUPOLE'  
    },
    {
        installId: 289,
        vendor: 'Danfysik, Denmark' ,
        name: 'SH1G6C03B' ,
        serialNumber: '136' ,
        system: 'Storage Ring' ,
        componentType: 'Sext A' ,
        inventoryId: 656,
        typeDescription: '68mm, SHORT SEXTUPOLE'  
    },
    {
        installId: 296,
        vendor: 'Danfysik, Denmark' ,
        name: 'SH3G2C04A' ,
        serialNumber: '137' ,
        system: 'Storage Ring' ,
        componentType: 'Sext A' ,
        inventoryId: 657,
        typeDescription: '68mm, SHORT SEXTUPOLE'  
    },
    {
        installId: 298,
        vendor: 'Danfysik, Denmark' ,
        name: 'SH4G2C04A' ,
        serialNumber: '138' ,
        system: 'Storage Ring' ,
        componentType: 'Sext A' ,
        inventoryId: 658,
        typeDescription: '68mm, SHORT SEXTUPOLE'  
    },
    {
        installId: 892,
        vendor: 'Danfysik, Denmark' ,
        name: 'SH1G2C24A' ,
        serialNumber: '139' ,
        system: 'Storage Ring' ,
        componentType: 'Sext A' ,
        inventoryId: 659,
        typeDescription: '68mm, SHORT SEXTUPOLE'  
    },
    {
        installId: 896,
        vendor: 'Danfysik, Denmark' ,
        name: 'SH3G2C24A' ,
        serialNumber: '140' ,
        system: 'Storage Ring' ,
        componentType: 'Sext A' ,
        inventoryId: 660,
        typeDescription: '68mm, SHORT SEXTUPOLE'  
    },
    {
        installId: 898,
        vendor: 'Danfysik, Denmark' ,
        name: 'SH4G2C24A' ,
        serialNumber: '141' ,
        system: 'Storage Ring' ,
        componentType: 'Sext A' ,
        inventoryId: 661,
        typeDescription: '68mm, SHORT SEXTUPOLE'  
    },
    {
        installId: 472,
        vendor: 'Danfysik, Denmark' ,
        name: 'SH1G2C10A' ,
        serialNumber: '142' ,
        system: 'Storage Ring' ,
        componentType: 'Sext A' ,
        inventoryId: 662,
        typeDescription: '68mm, SHORT SEXTUPOLE'  
    },
    {
        installId: 476,
        vendor: 'Danfysik, Denmark' ,
        name: 'SH3G2C10A' ,
        serialNumber: '143' ,
        system: 'Storage Ring' ,
        componentType: 'Sext A' ,
        inventoryId: 663,
        typeDescription: '68mm, SHORT SEXTUPOLE'  
    },
    {
        installId: 478,
        vendor: 'Danfysik, Denmark' ,
        name: 'SH4G2C10A' ,
        serialNumber: '144' ,
        system: 'Storage Ring' ,
        componentType: 'Sext A' ,
        inventoryId: 664,
        typeDescription: '68mm, SHORT SEXTUPOLE'  
    },
    {
        installId: 728,
        vendor: 'Danfysik, Denmark' ,
        name: 'SM1G4C18B' ,
        serialNumber: '145' ,
        system: 'Storage Ring' ,
        componentType: 'Sext A' ,
        inventoryId: 665,
        typeDescription: '68mm, SHORT SEXTUPOLE'  
    },
    {
        installId: 568,
        vendor: 'Danfysik, Denmark' ,
        name: 'SL3G2C13A' ,
        serialNumber: '146' ,
        system: 'Storage Ring' ,
        componentType: 'Sext A' ,
        inventoryId: 666,
        typeDescription: '68mm, SHORT SEXTUPOLE'  
    },
    {
        installId: 188,
        vendor: 'Danfysik, Denmark' ,
        name: 'SM1G4C30B' ,
        serialNumber: '147' ,
        system: 'Storage Ring' ,
        componentType: 'Sext A' ,
        inventoryId: 667,
        typeDescription: '68mm, SHORT SEXTUPOLE'  
    },
    {
        installId: 758,
        vendor: 'Danfysik, Denmark' ,
        name: 'SM1G4C19B' ,
        serialNumber: '148' ,
        system: 'Storage Ring' ,
        componentType: 'Sext A' ,
        inventoryId: 668,
        typeDescription: '68mm, SHORT SEXTUPOLE'  
    },
    {
        installId: 625,
        vendor: 'Danfysik, Denmark' ,
        name: 'SL2G2C15A' ,
        serialNumber: '149' ,
        system: 'Storage Ring' ,
        componentType: 'Sext A' ,
        inventoryId: 669,
        typeDescription: '68mm, SHORT SEXTUPOLE'  
    },
    {
        installId: 838,
        vendor: 'Danfysik, Denmark' ,
        name: 'SH4G2C22A' ,
        serialNumber: '150' ,
        system: 'Storage Ring' ,
        componentType: 'Sext A' ,
        inventoryId: 670,
        typeDescription: '68mm, SHORT SEXTUPOLE'  
    },
    {
        installId: 628,
        vendor: 'Danfysik, Denmark' ,
        name: 'SL3G2C15A' ,
        serialNumber: '151' ,
        system: 'Storage Ring' ,
        componentType: 'Sext A' ,
        inventoryId: 671,
        typeDescription: '68mm, SHORT SEXTUPOLE'  
    },
    {
        installId: 616,
        vendor: 'Danfysik, Denmark' ,
        name: 'SL2G6C14B' ,
        serialNumber: '152' ,
        system: 'Storage Ring' ,
        componentType: 'Sext A' ,
        inventoryId: 672,
        typeDescription: '68mm, SHORT SEXTUPOLE'  
    },
    {
        installId: 619,
        vendor: 'Danfysik, Denmark' ,
        name: 'SL1G6C14B' ,
        serialNumber: '153' ,
        system: 'Storage Ring' ,
        componentType: 'Sext A' ,
        inventoryId: 673,
        typeDescription: '68mm, SHORT SEXTUPOLE'  
    },
    {
        installId: 589,
        vendor: 'Danfysik, Denmark' ,
        name: 'SH1G6C13B' ,
        serialNumber: '154' ,
        system: 'Storage Ring' ,
        componentType: 'Sext A' ,
        inventoryId: 674,
        typeDescription: '68mm, SHORT SEXTUPOLE'  
    },
    {
        installId: 676,
        vendor: 'Danfysik, Denmark' ,
        name: 'SL2G6C16B' ,
        serialNumber: '155' ,
        system: 'Storage Ring' ,
        componentType: 'Sext A' ,
        inventoryId: 675,
        typeDescription: '68mm, SHORT SEXTUPOLE'  
    },
    {
        installId: 679,
        vendor: 'Danfysik, Denmark' ,
        name: 'SL1G6C16B' ,
        serialNumber: '156' ,
        system: 'Storage Ring' ,
        componentType: 'Sext A' ,
        inventoryId: 676,
        typeDescription: '68mm, SHORT SEXTUPOLE'  
    },
    {
        installId: 856,
        vendor: 'Danfysik, Denmark' ,
        name: 'SL2G6C22B' ,
        serialNumber: '157' ,
        system: 'Storage Ring' ,
        componentType: 'Sext A' ,
        inventoryId: 677,
        typeDescription: '68mm, SHORT SEXTUPOLE'  
    },
    {
        installId: 769,
        vendor: 'Danfysik, Denmark' ,
        name: 'SH1G6C19B' ,
        serialNumber: '158' ,
        system: 'Storage Ring' ,
        componentType: 'Sext A' ,
        inventoryId: 678,
        typeDescription: '68mm, SHORT SEXTUPOLE'  
    },
    {
        installId: 709,
        vendor: 'Danfysik, Denmark' ,
        name: 'SH1G6C17B' ,
        serialNumber: '159' ,
        system: 'Storage Ring' ,
        componentType: 'Sext A' ,
        inventoryId: 679,
        typeDescription: '68mm, SHORT SEXTUPOLE'  
    },
    {
        installId: 658,
        vendor: 'Danfysik, Denmark' ,
        name: 'SH4G2C16A' ,
        serialNumber: '160' ,
        system: 'Storage Ring' ,
        componentType: 'Sext A' ,
        inventoryId: 680,
        typeDescription: '68mm, SHORT SEXTUPOLE'  
    },
    {
        installId: 716,
        vendor: 'Danfysik, Denmark' ,
        name: 'SH3G2C18A' ,
        serialNumber: '161' ,
        system: 'Storage Ring' ,
        componentType: 'Sext A' ,
        inventoryId: 681,
        typeDescription: '68mm, SHORT SEXTUPOLE'  
    },
    {
        installId: 688,
        vendor: 'Danfysik, Denmark' ,
        name: 'SL3G2C17A' ,
        serialNumber: '162' ,
        system: 'Storage Ring' ,
        componentType: 'Sext A' ,
        inventoryId: 682,
        typeDescription: '68mm, SHORT SEXTUPOLE'  
    },
    {
        installId: 748,
        vendor: 'Danfysik, Denmark' ,
        name: 'SL3G2C19A' ,
        serialNumber: '163' ,
        system: 'Storage Ring' ,
        componentType: 'Sext A' ,
        inventoryId: 683,
        typeDescription: '68mm, SHORT SEXTUPOLE'  
    },
    {
        installId: 718,
        vendor: 'Danfysik, Denmark' ,
        name: 'SH4G2C18A' ,
        serialNumber: '164' ,
        system: 'Storage Ring' ,
        componentType: 'Sext A' ,
        inventoryId: 684,
        typeDescription: '68mm, SHORT SEXTUPOLE'  
    },
    {
        installId: 859,
        vendor: 'Danfysik, Denmark' ,
        name: 'SL1G6C22B' ,
        serialNumber: '165' ,
        system: 'Storage Ring' ,
        componentType: 'Sext A' ,
        inventoryId: 685,
        typeDescription: '68mm, SHORT SEXTUPOLE'  
    },
    {
        installId: 799,
        vendor: 'Danfysik, Denmark' ,
        name: 'SL1G6C20B' ,
        serialNumber: '166' ,
        system: 'Storage Ring' ,
        componentType: 'Sext A' ,
        inventoryId: 686,
        typeDescription: '68mm, SHORT SEXTUPOLE'  
    },
    {
        installId: 772,
        vendor: 'Danfysik, Denmark' ,
        name: 'SH1G2C20A' ,
        serialNumber: '167' ,
        system: 'Storage Ring' ,
        componentType: 'Sext A' ,
        inventoryId: 687,
        typeDescription: '68mm, SHORT SEXTUPOLE'  
    },
    {
        installId: 776,
        vendor: 'Danfysik, Denmark' ,
        name: 'SH3G2C20A' ,
        serialNumber: '168' ,
        system: 'Storage Ring' ,
        componentType: 'Sext A' ,
        inventoryId: 688,
        typeDescription: '68mm, SHORT SEXTUPOLE'  
    },
    {
        installId: 778,
        vendor: 'Danfysik, Denmark' ,
        name: 'SH4G2C20A' ,
        serialNumber: '169' ,
        system: 'Storage Ring' ,
        componentType: 'Sext A' ,
        inventoryId: 689,
        typeDescription: '68mm, SHORT SEXTUPOLE'  
    },
    {
        installId: 243,
        vendor: 'IHEP, China' ,
        name: 'SM1G4C02A' ,
        serialNumber: '9' ,
        system: 'Storage Ring' ,
        componentType: 'Sext B' ,
        inventoryId: 690,
        typeDescription: '68mm, SHORT, WIDE SEXTUPOLE'  
    },
    {
        installId: 903,
        vendor: 'IHEP, China' ,
        name: 'SM1G4C24A' ,
        serialNumber: '10' ,
        system: 'Storage Ring' ,
        componentType: 'Sext B' ,
        inventoryId: 691,
        typeDescription: '68mm, SHORT, WIDE SEXTUPOLE'  
    },
    {
        installId: 913,
        vendor: 'IHEP, China' ,
        name: 'SL3G6C24B' ,
        serialNumber: '11' ,
        system: 'Storage Ring' ,
        componentType: 'Sext B' ,
        inventoryId: 692,
        typeDescription: '68mm, SHORT, WIDE SEXTUPOLE'  
    },
    {
        installId: 933,
        vendor: 'IHEP, China' ,
        name: 'SM1G4C25A' ,
        serialNumber: '12' ,
        system: 'Storage Ring' ,
        componentType: 'Sext B' ,
        inventoryId: 693,
        typeDescription: '68mm, SHORT, WIDE SEXTUPOLE'  
    },
    {
        installId: 453,
        vendor: 'IHEP, China' ,
        name: 'SM1G4C09A' ,
        serialNumber: '13' ,
        system: 'Storage Ring' ,
        componentType: 'Sext B' ,
        inventoryId: 694,
        typeDescription: '68mm, SHORT, WIDE SEXTUPOLE'  
    },
    {
        installId: 333,
        vendor: 'IHEP, China' ,
        name: 'SM1G4C05A' ,
        serialNumber: '14' ,
        system: 'Storage Ring' ,
        componentType: 'Sext B' ,
        inventoryId: 695,
        typeDescription: '68mm, SHORT, WIDE SEXTUPOLE'  
    },
    {
        installId: 273,
        vendor: 'IHEP, China' ,
        name: 'SM1G4C03A' ,
        serialNumber: '15' ,
        system: 'Storage Ring' ,
        componentType: 'Sext B' ,
        inventoryId: 696,
        typeDescription: '68mm, SHORT, WIDE SEXTUPOLE'  
    },
    {
        installId: 1033,
        vendor: 'IHEP, China' ,
        name: 'SL3G6C28B' ,
        serialNumber: '16' ,
        system: 'Storage Ring' ,
        componentType: 'Sext B' ,
        inventoryId: 697,
        typeDescription: '68mm, SHORT, WIDE SEXTUPOLE'  
    },
    {
        installId: 793,
        vendor: 'IHEP, China' ,
        name: 'SL3G6C20B' ,
        serialNumber: '17' ,
        system: 'Storage Ring' ,
        componentType: 'Sext B' ,
        inventoryId: 698,
        typeDescription: '68mm, SHORT, WIDE SEXTUPOLE'  
    },
    {
        installId: 363,
        vendor: 'IHEP, China' ,
        name: 'SM1G4C06A' ,
        serialNumber: '18' ,
        system: 'Storage Ring' ,
        componentType: 'Sext B' ,
        inventoryId: 699,
        typeDescription: '68mm, SHORT, WIDE SEXTUPOLE'  
    },
    {
        installId: 945,
        vendor: 'IHEP, China' ,
        name: 'SH3G6C25B' ,
        serialNumber: '19' ,
        system: 'Storage Ring' ,
        componentType: 'Sext B' ,
        inventoryId: 700,
        typeDescription: '68mm, SHORT, WIDE SEXTUPOLE'  
    },
    {
        installId: 1065,
        vendor: 'IHEP, China' ,
        name: 'SH3G6C29B' ,
        serialNumber: '20' ,
        system: 'Storage Ring' ,
        componentType: 'Sext B' ,
        inventoryId: 701,
        typeDescription: '68mm, SHORT, WIDE SEXTUPOLE'  
    },
    {
        installId: 973,
        vendor: 'IHEP, China' ,
        name: 'SL3G6C26B' ,
        serialNumber: '21' ,
        system: 'Storage Ring' ,
        componentType: 'Sext B' ,
        inventoryId: 702,
        typeDescription: '68mm, SHORT, WIDE SEXTUPOLE'  
    },
    {
        installId: 963,
        vendor: 'IHEP, China' ,
        name: 'SM1G4C26A' ,
        serialNumber: '22' ,
        system: 'Storage Ring' ,
        componentType: 'Sext B' ,
        inventoryId: 703,
        typeDescription: '68mm, SHORT, WIDE SEXTUPOLE'  
    },
    {
        installId: 943,
        vendor: 'IHEP, China' ,
        name: 'SH4G6C25B' ,
        serialNumber: '23' ,
        system: 'Storage Ring' ,
        componentType: 'Sext B' ,
        inventoryId: 704,
        typeDescription: '68mm, SHORT, WIDE SEXTUPOLE'  
    },
    {
        installId: 1053,
        vendor: 'IHEP, China' ,
        name: 'SM1G4C29A' ,
        serialNumber: '24' ,
        system: 'Storage Ring' ,
        componentType: 'Sext B' ,
        inventoryId: 705,
        typeDescription: '68mm, SHORT, WIDE SEXTUPOLE'  
    },
    {
        installId: 303,
        vendor: 'IHEP, China' ,
        name: 'SM1G4C04A' ,
        serialNumber: '25' ,
        system: 'Storage Ring' ,
        componentType: 'Sext B' ,
        inventoryId: 706,
        typeDescription: '68mm, SHORT, WIDE SEXTUPOLE'  
    },
    {
        installId: 823,
        vendor: 'IHEP, China' ,
        name: 'SH4G6C21B' ,
        serialNumber: '26' ,
        system: 'Storage Ring' ,
        componentType: 'Sext B' ,
        inventoryId: 707,
        typeDescription: '68mm, SHORT, WIDE SEXTUPOLE'  
    },
    {
        installId: 483,
        vendor: 'IHEP, China' ,
        name: 'SM1G4C10A' ,
        serialNumber: '27' ,
        system: 'Storage Ring' ,
        componentType: 'Sext B' ,
        inventoryId: 708,
        typeDescription: '68mm, SHORT, WIDE SEXTUPOLE'  
    },
    {
        installId: 993,
        vendor: 'IHEP, China' ,
        name: 'SM1G4C27A' ,
        serialNumber: '28' ,
        system: 'Storage Ring' ,
        componentType: 'Sext B' ,
        inventoryId: 709,
        typeDescription: '68mm, SHORT, WIDE SEXTUPOLE'  
    },
    {
        installId: 373,
        vendor: 'IHEP, China' ,
        name: 'SL3G6C06B' ,
        serialNumber: '29' ,
        system: 'Storage Ring' ,
        componentType: 'Sext B' ,
        inventoryId: 710,
        typeDescription: '68mm, SHORT, WIDE SEXTUPOLE'  
    },
    {
        installId: 223,
        vendor: 'IHEP, China' ,
        name: 'SH4G6C01B' ,
        serialNumber: '30' ,
        system: 'Storage Ring' ,
        componentType: 'Sext B' ,
        inventoryId: 711,
        typeDescription: '68mm, SHORT, WIDE SEXTUPOLE'  
    },
    {
        installId: 543,
        vendor: 'IHEP, China' ,
        name: 'SM1G4C12A' ,
        serialNumber: '31' ,
        system: 'Storage Ring' ,
        componentType: 'Sext B' ,
        inventoryId: 712,
        typeDescription: '68mm, SHORT, WIDE SEXTUPOLE'  
    },
    {
        installId: 603,
        vendor: 'IHEP, China' ,
        name: 'SM1G4C14A' ,
        serialNumber: '32' ,
        system: 'Storage Ring' ,
        componentType: 'Sext B' ,
        inventoryId: 713,
        typeDescription: '68mm, SHORT, WIDE SEXTUPOLE'  
    },
    {
        installId: 1063,
        vendor: 'IHEP, China' ,
        name: 'SH4G6C29B' ,
        serialNumber: '33' ,
        system: 'Storage Ring' ,
        componentType: 'Sext B' ,
        inventoryId: 714,
        typeDescription: '68mm, SHORT, WIDE SEXTUPOLE'  
    },
    {
        installId: 513,
        vendor: 'IHEP, China' ,
        name: 'SM1G4C11A' ,
        serialNumber: '34' ,
        system: 'Storage Ring' ,
        componentType: 'Sext B' ,
        inventoryId: 715,
        typeDescription: '68mm, SHORT, WIDE SEXTUPOLE'  
    },
    {
        installId: 663,
        vendor: 'IHEP, China' ,
        name: 'SM1G4C16A' ,
        serialNumber: '35' ,
        system: 'Storage Ring' ,
        componentType: 'Sext B' ,
        inventoryId: 716,
        typeDescription: '68mm, SHORT, WIDE SEXTUPOLE'  
    },
    {
        installId: 253,
        vendor: 'IHEP, China' ,
        name: 'SL3G6C02B' ,
        serialNumber: '36' ,
        system: 'Storage Ring' ,
        componentType: 'Sext B' ,
        inventoryId: 717,
        typeDescription: '68mm, SHORT, WIDE SEXTUPOLE'  
    },
    {
        installId: 553,
        vendor: 'IHEP, China' ,
        name: 'SL3G6C12B' ,
        serialNumber: '37' ,
        system: 'Storage Ring' ,
        componentType: 'Sext B' ,
        inventoryId: 718,
        typeDescription: '68mm, SHORT, WIDE SEXTUPOLE'  
    },
    {
        installId: 573,
        vendor: 'IHEP, China' ,
        name: 'SM1G4C13A' ,
        serialNumber: '38' ,
        system: 'Storage Ring' ,
        componentType: 'Sext B' ,
        inventoryId: 719,
        typeDescription: '68mm, SHORT, WIDE SEXTUPOLE'  
    },
    {
        installId: 1023,
        vendor: 'IHEP, China' ,
        name: 'SM1G4C28A' ,
        serialNumber: '39' ,
        system: 'Storage Ring' ,
        componentType: 'Sext B' ,
        inventoryId: 720,
        typeDescription: '68mm, SHORT, WIDE SEXTUPOLE'  
    },
    {
        installId: 463,
        vendor: 'IHEP, China' ,
        name: 'SH4G6C09B' ,
        serialNumber: '40' ,
        system: 'Storage Ring' ,
        componentType: 'Sext B' ,
        inventoryId: 721,
        typeDescription: '68mm, SHORT, WIDE SEXTUPOLE'  
    },
    {
        installId: 763,
        vendor: 'IHEP, China' ,
        name: 'SH4G6C19B' ,
        serialNumber: '41' ,
        system: 'Storage Ring' ,
        componentType: 'Sext B' ,
        inventoryId: 722,
        typeDescription: '68mm, SHORT, WIDE SEXTUPOLE'  
    },
    {
        installId: 465,
        vendor: 'IHEP, China' ,
        name: 'SH3G6C09B' ,
        serialNumber: '42' ,
        system: 'Storage Ring' ,
        componentType: 'Sext B' ,
        inventoryId: 723,
        typeDescription: '68mm, SHORT, WIDE SEXTUPOLE'  
    },
    {
        installId: 1003,
        vendor: 'IHEP, China' ,
        name: 'SH4G6C27B' ,
        serialNumber: '43' ,
        system: 'Storage Ring' ,
        componentType: 'Sext B' ,
        inventoryId: 724,
        typeDescription: '68mm, SHORT, WIDE SEXTUPOLE'  
    },
    {
        installId: 1005,
        vendor: 'IHEP, China' ,
        name: 'SH3G6C27B' ,
        serialNumber: '44' ,
        system: 'Storage Ring' ,
        componentType: 'Sext B' ,
        inventoryId: 725,
        typeDescription: '68mm, SHORT, WIDE SEXTUPOLE'  
    },
    {
        installId: 225,
        vendor: 'IHEP, China' ,
        name: 'SH3G6C01B' ,
        serialNumber: '45' ,
        system: 'Storage Ring' ,
        componentType: 'Sext B' ,
        inventoryId: 726,
        typeDescription: '68mm, SHORT, WIDE SEXTUPOLE'  
    },
    {
        installId: 873,
        vendor: 'IHEP, China' ,
        name: 'SM1G4C23A' ,
        serialNumber: '46' ,
        system: 'Storage Ring' ,
        componentType: 'Sext B' ,
        inventoryId: 727,
        typeDescription: '68mm, SHORT, WIDE SEXTUPOLE'  
    },
    {
        installId: 633,
        vendor: 'IHEP, China' ,
        name: 'SM1G4C15A' ,
        serialNumber: '47' ,
        system: 'Storage Ring' ,
        componentType: 'Sext B' ,
        inventoryId: 728,
        typeDescription: '68mm, SHORT, WIDE SEXTUPOLE'  
    },
    {
        installId: 493,
        vendor: 'IHEP, China' ,
        name: 'SL3G6C10B' ,
        serialNumber: '48' ,
        system: 'Storage Ring' ,
        componentType: 'Sext B' ,
        inventoryId: 729,
        typeDescription: '68mm, SHORT, WIDE SEXTUPOLE'  
    },
    {
        installId: 193,
        vendor: 'IHEP, China' ,
        name: 'SL3G6C30B' ,
        serialNumber: '49' ,
        system: 'Storage Ring' ,
        componentType: 'Sext B' ,
        inventoryId: 730,
        typeDescription: '68mm, SHORT, WIDE SEXTUPOLE'  
    },
    {
        installId: 423,
        vendor: 'IHEP, China' ,
        name: 'SM1G4C08A' ,
        serialNumber: '50' ,
        system: 'Storage Ring' ,
        componentType: 'Sext B' ,
        inventoryId: 731,
        typeDescription: '68mm, SHORT, WIDE SEXTUPOLE'  
    },
    {
        installId: 393,
        vendor: 'IHEP, China' ,
        name: 'SM1G4C07A' ,
        serialNumber: '51' ,
        system: 'Storage Ring' ,
        componentType: 'Sext B' ,
        inventoryId: 732,
        typeDescription: '68mm, SHORT, WIDE SEXTUPOLE'  
    },
    {
        installId: 313,
        vendor: 'IHEP, China' ,
        name: 'SL3G6C04B' ,
        serialNumber: '52' ,
        system: 'Storage Ring' ,
        componentType: 'Sext B' ,
        inventoryId: 733,
        typeDescription: '68mm, SHORT, WIDE SEXTUPOLE'  
    },
    {
        installId: 883,
        vendor: 'IHEP, China' ,
        name: 'SH4G6C23B' ,
        serialNumber: '53' ,
        system: 'Storage Ring' ,
        componentType: 'Sext B' ,
        inventoryId: 734,
        typeDescription: '68mm, SHORT, WIDE SEXTUPOLE'  
    },
    {
        installId: 885,
        vendor: 'IHEP, China' ,
        name: 'SH3G6C23B' ,
        serialNumber: '54' ,
        system: 'Storage Ring' ,
        componentType: 'Sext B' ,
        inventoryId: 735,
        typeDescription: '68mm, SHORT, WIDE SEXTUPOLE'  
    },
    {
        installId: 753,
        vendor: 'IHEP, China' ,
        name: 'SM1G4C19A' ,
        serialNumber: '55' ,
        system: 'Storage Ring' ,
        componentType: 'Sext B' ,
        inventoryId: 736,
        typeDescription: '68mm, SHORT, WIDE SEXTUPOLE'  
    },
    {
        installId: 433,
        vendor: 'IHEP, China' ,
        name: 'SL3G6C08B' ,
        serialNumber: '56' ,
        system: 'Storage Ring' ,
        componentType: 'Sext B' ,
        inventoryId: 737,
        typeDescription: '68mm, SHORT, WIDE SEXTUPOLE'  
    },
    {
        installId: 525,
        vendor: 'IHEP, China' ,
        name: 'SH3G6C11B' ,
        serialNumber: '57' ,
        system: 'Storage Ring' ,
        componentType: 'Sext B' ,
        inventoryId: 738,
        typeDescription: '68mm, SHORT, WIDE SEXTUPOLE'  
    },
    {
        installId: 403,
        vendor: 'IHEP, China' ,
        name: 'SH4G6C07B' ,
        serialNumber: '58' ,
        system: 'Storage Ring' ,
        componentType: 'Sext B' ,
        inventoryId: 739,
        typeDescription: '68mm, SHORT, WIDE SEXTUPOLE'  
    },
    {
        installId: 343,
        vendor: 'IHEP, China' ,
        name: 'SH4G6C05B' ,
        serialNumber: '59' ,
        system: 'Storage Ring' ,
        componentType: 'Sext B' ,
        inventoryId: 740,
        typeDescription: '68mm, SHORT, WIDE SEXTUPOLE'  
    },
    {
        installId: 345,
        vendor: 'IHEP, China' ,
        name: 'SH3G6C05B' ,
        serialNumber: '60' ,
        system: 'Storage Ring' ,
        componentType: 'Sext B' ,
        inventoryId: 741,
        typeDescription: '68mm, SHORT, WIDE SEXTUPOLE'  
    },
    {
        installId: 523,
        vendor: 'IHEP, China' ,
        name: 'SH4G6C11B' ,
        serialNumber: '61' ,
        system: 'Storage Ring' ,
        componentType: 'Sext B' ,
        inventoryId: 742,
        typeDescription: '68mm, SHORT, WIDE SEXTUPOLE'  
    },
    {
        installId: 405,
        vendor: 'IHEP, China' ,
        name: 'SH3G6C07B' ,
        serialNumber: '62' ,
        system: 'Storage Ring' ,
        componentType: 'Sext B' ,
        inventoryId: 743,
        typeDescription: '68mm, SHORT, WIDE SEXTUPOLE'  
    },
    {
        installId: 283,
        vendor: 'IHEP, China' ,
        name: 'SH4G6C03B' ,
        serialNumber: '63' ,
        system: 'Storage Ring' ,
        componentType: 'Sext B' ,
        inventoryId: 744,
        typeDescription: '68mm, SHORT, WIDE SEXTUPOLE'  
    },
    {
        installId: 285,
        vendor: 'IHEP, China' ,
        name: 'SH3G6C03B' ,
        serialNumber: '64' ,
        system: 'Storage Ring' ,
        componentType: 'Sext B' ,
        inventoryId: 745,
        typeDescription: '68mm, SHORT, WIDE SEXTUPOLE'  
    },
    {
        installId: 843,
        vendor: 'IHEP, China' ,
        name: 'SM1G4C22A' ,
        serialNumber: '65' ,
        system: 'Storage Ring' ,
        componentType: 'Sext B' ,
        inventoryId: 746,
        typeDescription: '68mm, SHORT, WIDE SEXTUPOLE'  
    },
    {
        installId: 783,
        vendor: 'IHEP, China' ,
        name: 'SM1G4C20A' ,
        serialNumber: '66' ,
        system: 'Storage Ring' ,
        componentType: 'Sext B' ,
        inventoryId: 747,
        typeDescription: '68mm, SHORT, WIDE SEXTUPOLE'  
    },
    {
        installId: null,
        vendor: 'IHEP, China' ,
        name: nl,
        serialNumber: '67' ,
        system: ll,
        componentType:  Sext B' ,
        inventoryId: 748,
        typeDescription:  68mm, SHORT, WIDE SEXTUPOLE'  
    },
    {
        installId: 643,
        vendor: 'IHEP, China' ,
        name: 'SH4G6C15B' ,
        serialNumber: '68' ,
        system: 'Storage Ring' ,
        componentType: 'Sext B' ,
        inventoryId: 749,
        typeDescription: '68mm, SHORT, WIDE SEXTUPOLE'  
    },
    {
        installId: 645,
        vendor: 'IHEP, China' ,
        name: 'SH3G6C15B' ,
        serialNumber: '69' ,
        system: 'Storage Ring' ,
        componentType: 'Sext B' ,
        inventoryId: 750,
        typeDescription: '68mm, SHORT, WIDE SEXTUPOLE'  
    },
    {
        installId: 183,
        vendor: 'IHEP, China' ,
        name: 'SM1G4C30A' ,
        serialNumber: '70' ,
        system: 'Storage Ring' ,
        componentType: 'Sext B' ,
        inventoryId: 751,
        typeDescription: '68mm, SHORT, WIDE SEXTUPOLE'  
    },
    {
        installId: 583,
        vendor: 'IHEP, China' ,
        name: 'SH4G6C13B' ,
        serialNumber: '71' ,
        system: 'Storage Ring' ,
        componentType: 'Sext B' ,
        inventoryId: 752,
        typeDescription: '68mm, SHORT, WIDE SEXTUPOLE'  
    },
    {
        installId: 585,
        vendor: 'IHEP, China' ,
        name: 'SH3G6C13B' ,
        serialNumber: '72' ,
        system: 'Storage Ring' ,
        componentType: 'Sext B' ,
        inventoryId: 753,
        typeDescription: '68mm, SHORT, WIDE SEXTUPOLE'  
    },
    {
        installId: 613,
        vendor: 'IHEP, China' ,
        name: 'SL3G6C14B' ,
        serialNumber: '73' ,
        system: 'Storage Ring' ,
        componentType: 'Sext B' ,
        inventoryId: 754,
        typeDescription: '68mm, SHORT, WIDE SEXTUPOLE'  
    },
    {
        installId: 723,
        vendor: 'IHEP, China' ,
        name: 'SM1G4C18A' ,
        serialNumber: '74' ,
        system: 'Storage Ring' ,
        componentType: 'Sext B' ,
        inventoryId: 755,
        typeDescription: '68mm, SHORT, WIDE SEXTUPOLE'  
    },
    {
        installId: 813,
        vendor: 'IHEP, China' ,
        name: 'SM1G4C21A' ,
        serialNumber: '75' ,
        system: 'Storage Ring' ,
        componentType: 'Sext B' ,
        inventoryId: 756,
        typeDescription: '68mm, SHORT, WIDE SEXTUPOLE'  
    },
    {
        installId: 693,
        vendor: 'IHEP, China' ,
        name: 'SM1G4C17A' ,
        serialNumber: '76' ,
        system: 'Storage Ring' ,
        componentType: 'Sext B' ,
        inventoryId: 757,
        typeDescription: '68mm, SHORT, WIDE SEXTUPOLE'  
    },
    {
        installId: 853,
        vendor: 'IHEP, China' ,
        name: 'SL3G6C22B' ,
        serialNumber: '77' ,
        system: 'Storage Ring' ,
        componentType: 'Sext B' ,
        inventoryId: 758,
        typeDescription: '68mm, SHORT, WIDE SEXTUPOLE'  
    },
    {
        installId: 703,
        vendor: 'IHEP, China' ,
        name: 'SH4G6C17B' ,
        serialNumber: '78' ,
        system: 'Storage Ring' ,
        componentType: 'Sext B' ,
        inventoryId: 759,
        typeDescription: '68mm, SHORT, WIDE SEXTUPOLE'  
    },
    {
        installId: 705,
        vendor: 'IHEP, China' ,
        name: 'SH3G6C17B' ,
        serialNumber: '79' ,
        system: 'Storage Ring' ,
        componentType: 'Sext B' ,
        inventoryId: 760,
        typeDescription: '68mm, SHORT, WIDE SEXTUPOLE'  
    },
    {
        installId: 825,
        vendor: 'IHEP, China' ,
        name: 'SH3G6C21B' ,
        serialNumber: '80' ,
        system: 'Storage Ring' ,
        componentType: 'Sext B' ,
        inventoryId: 761,
        typeDescription: '68mm, SHORT, WIDE SEXTUPOLE'  
    },
    {
        installId: 673,
        vendor: 'IHEP, China' ,
        name: 'SL3G6C16B' ,
        serialNumber: '81' ,
        system: 'Storage Ring' ,
        componentType: 'Sext B' ,
        inventoryId: 762,
        typeDescription: '68mm, SHORT, WIDE SEXTUPOLE'  
    },
    {
        installId: 765,
        vendor: 'IHEP, China' ,
        name: 'SH3G6C19B' ,
        serialNumber: '82' ,
        system: 'Storage Ring' ,
        componentType: 'Sext B' ,
        inventoryId: 763,
        typeDescription: '68mm, SHORT, WIDE SEXTUPOLE'  
    },
    {
        installId: 733,
        vendor: 'IHEP, China' ,
        name: 'SL3G6C18B' ,
        serialNumber: '83' ,
        system: 'Storage Ring' ,
        componentType: 'Sext B' ,
        inventoryId: 764,
        typeDescription: '68mm, SHORT, WIDE SEXTUPOLE'  
    },
    {
        installId: 906,
        vendor: 'Buckley, New Zealand' ,
        name: 'SM2G4C24B' ,
        serialNumber: '1' ,
        system: 'Storage Ring' ,
        componentType: 'Sext C' ,
        inventoryId: 765,
        typeDescription: '76mm, LONG SEXTUPOLE'  
    },
    {
        installId: 936,
        vendor: 'Buckley, New Zealand' ,
        name: 'SM2G4C25B' ,
        serialNumber: '2' ,
        system: 'Storage Ring' ,
        componentType: 'Sext C' ,
        inventoryId: 766,
        typeDescription: '76mm, LONG SEXTUPOLE'  
    },
    {
        installId: 966,
        vendor: 'Buckley, New Zealand' ,
        name: 'SM2G4C26B' ,
        serialNumber: '3' ,
        system: 'Storage Ring' ,
        componentType: 'Sext C' ,
        inventoryId: 767,
        typeDescription: '76mm, LONG SEXTUPOLE'  
    },
    {
        installId: 246,
        vendor: 'Buckley, New Zealand' ,
        name: 'SM2G4C02B' ,
        serialNumber: '4' ,
        system: 'Storage Ring' ,
        componentType: 'Sext C' ,
        inventoryId: 768,
        typeDescription: '76mm, LONG SEXTUPOLE'  
    },
    {
        installId: 1056,
        vendor: 'Buckley, New Zealand' ,
        name: 'SM2G4C29B' ,
        serialNumber: '5' ,
        system: 'Storage Ring' ,
        componentType: 'Sext C' ,
        inventoryId: 769,
        typeDescription: '76mm, LONG SEXTUPOLE'  
    },
    {
        installId: null,
        vendor: 'Buckley, New Zealand' ,
        name: nl,
        serialNumber: '6' ,
        system: ll,
        componentType:  Sext C' ,
        inventoryId: 770,
        typeDescription:  76mm, LONG SEXTUPOLE'  
    },
    {
        installId: 276,
        vendor: 'Buckley, New Zealand' ,
        name: 'SM2G4C03B' ,
        serialNumber: '7' ,
        system: 'Storage Ring' ,
        componentType: 'Sext C' ,
        inventoryId: 771,
        typeDescription: '76mm, LONG SEXTUPOLE'  
    },
    {
        installId: 306,
        vendor: 'Buckley, New Zealand' ,
        name: 'SM2G4C04B' ,
        serialNumber: '8' ,
        system: 'Storage Ring' ,
        componentType: 'Sext C' ,
        inventoryId: 772,
        typeDescription: '76mm, LONG SEXTUPOLE'  
    },
    {
        installId: 336,
        vendor: 'Buckley, New Zealand' ,
        name: 'SM2G4C05B' ,
        serialNumber: '9' ,
        system: 'Storage Ring' ,
        componentType: 'Sext C' ,
        inventoryId: 773,
        typeDescription: '76mm, LONG SEXTUPOLE'  
    },
    {
        installId: 366,
        vendor: 'Buckley, New Zealand' ,
        name: 'SM2G4C06B' ,
        serialNumber: '10' ,
        system: 'Storage Ring' ,
        componentType: 'Sext C' ,
        inventoryId: 774,
        typeDescription: '76mm, LONG SEXTUPOLE'  
    },
    {
        installId: 456,
        vendor: 'Buckley, New Zealand' ,
        name: 'SM2G4C09B' ,
        serialNumber: '11' ,
        system: 'Storage Ring' ,
        componentType: 'Sext C' ,
        inventoryId: 775,
        typeDescription: '76mm, LONG SEXTUPOLE'  
    },
    {
        installId: 576,
        vendor: 'Buckley, New Zealand' ,
        name: 'SM2G4C13B' ,
        serialNumber: '12' ,
        system: 'Storage Ring' ,
        componentType: 'Sext C' ,
        inventoryId: 776,
        typeDescription: '76mm, LONG SEXTUPOLE'  
    },
    {
        installId: 486,
        vendor: 'Buckley, New Zealand' ,
        name: 'SM2G4C10B' ,
        serialNumber: '13' ,
        system: 'Storage Ring' ,
        componentType: 'Sext C' ,
        inventoryId: 777,
        typeDescription: '76mm, LONG SEXTUPOLE'  
    },
    {
        installId: 396,
        vendor: 'Buckley, New Zealand' ,
        name: 'SM2G4C07B' ,
        serialNumber: '14' ,
        system: 'Storage Ring' ,
        componentType: 'Sext C' ,
        inventoryId: 778,
        typeDescription: '76mm, LONG SEXTUPOLE'  
    },
    {
        installId: 546,
        vendor: 'Buckley, New Zealand' ,
        name: 'SM2G4C12B' ,
        serialNumber: '15' ,
        system: 'Storage Ring' ,
        componentType: 'Sext C' ,
        inventoryId: 779,
        typeDescription: '76mm, LONG SEXTUPOLE'  
    },
    {
        installId: 636,
        vendor: 'Buckley, New Zealand' ,
        name: 'SM2G4C15B' ,
        serialNumber: '16' ,
        system: 'Storage Ring' ,
        componentType: 'Sext C' ,
        inventoryId: 780,
        typeDescription: '76mm, LONG SEXTUPOLE'  
    },
    {
        installId: 516,
        vendor: 'Buckley, New Zealand' ,
        name: 'SM2G4C11B' ,
        serialNumber: '17' ,
        system: 'Storage Ring' ,
        componentType: 'Sext C' ,
        inventoryId: 781,
        typeDescription: '76mm, LONG SEXTUPOLE'  
    },
    {
        installId: 666,
        vendor: 'Buckley, New Zealand' ,
        name: 'SM2G4C16B' ,
        serialNumber: '18' ,
        system: 'Storage Ring' ,
        componentType: 'Sext C' ,
        inventoryId: 782,
        typeDescription: '76mm, LONG SEXTUPOLE'  
    },
    {
        installId: 426,
        vendor: 'Buckley, New Zealand' ,
        name: 'SM2G4C08B' ,
        serialNumber: '19' ,
        system: 'Storage Ring' ,
        componentType: 'Sext C' ,
        inventoryId: 783,
        typeDescription: '76mm, LONG SEXTUPOLE'  
    },
    {
        installId: 606,
        vendor: 'Buckley, New Zealand' ,
        name: 'SM2G4C14B' ,
        serialNumber: '20' ,
        system: 'Storage Ring' ,
        componentType: 'Sext C' ,
        inventoryId: 784,
        typeDescription: '76mm, LONG SEXTUPOLE'  
    },
    {
        installId: 876,
        vendor: 'Buckley, New Zealand' ,
        name: 'SM2G4C23B' ,
        serialNumber: '21' ,
        system: 'Storage Ring' ,
        componentType: 'Sext C' ,
        inventoryId: 785,
        typeDescription: '76mm, LONG SEXTUPOLE'  
    },
    {
        installId: null,
        vendor: 'Buckley, New Zealand' ,
        name: nl,
        serialNumber: '22' ,
        system: ll,
        componentType:  Sext C' ,
        inventoryId: 786,
        typeDescription:  76mm, LONG SEXTUPOLE'  
    },
    {
        installId: 996,
        vendor: 'Buckley, New Zealand' ,
        name: 'SM2G4C27B' ,
        serialNumber: '23' ,
        system: 'Storage Ring' ,
        componentType: 'Sext C' ,
        inventoryId: 787,
        typeDescription: '76mm, LONG SEXTUPOLE'  
    },
    {
        installId: 1026,
        vendor: 'Buckley, New Zealand' ,
        name: 'SM2G4C28B' ,
        serialNumber: '24' ,
        system: 'Storage Ring' ,
        componentType: 'Sext C' ,
        inventoryId: 788,
        typeDescription: '76mm, LONG SEXTUPOLE'  
    },
    {
        installId: null,
        vendor: 'Buckley, New Zealand' ,
        name: nl,
        serialNumber: '25' ,
        system: ll,
        componentType:  Sext C' ,
        inventoryId: 789,
        typeDescription:  76mm, LONG SEXTUPOLE'  
    },
    {
        installId: null,
        vendor: 'Buckley, New Zealand' ,
        name: nl,
        serialNumber: '26' ,
        system: ll,
        componentType:  Sext C' ,
        inventoryId: 790,
        typeDescription:  76mm, LONG SEXTUPOLE'  
    },
    {
        installId: null,
        vendor: 'Buckley, New Zealand' ,
        name: nl,
        serialNumber: '27' ,
        system: ll,
        componentType:  Sext C' ,
        inventoryId: 791,
        typeDescription:  76mm, LONG SEXTUPOLE'  
    },
    {
        installId: 186,
        vendor: 'Buckley, New Zealand' ,
        name: 'SM2G4C30B' ,
        serialNumber: '28' ,
        system: 'Storage Ring' ,
        componentType: 'Sext C' ,
        inventoryId: 792,
        typeDescription: '76mm, LONG SEXTUPOLE'  
    },
    {
        installId: 216,
        vendor: 'Buckley, New Zealand' ,
        name: 'SM2G4C01B' ,
        serialNumber: '29' ,
        system: 'Storage Ring' ,
        componentType: 'Sext C' ,
        inventoryId: 793,
        typeDescription: '76mm, LONG SEXTUPOLE'  
    },
    {
        installId: null,
        vendor: 'Buckley, New Zealand' ,
        name: nl,
        serialNumber: '30' ,
        system: ll,
        componentType:  Sext C' ,
        inventoryId: 794,
        typeDescription:  76mm, LONG SEXTUPOLE'  
    },
    {
        installId: 786,
        vendor: 'IHEP, China' ,
        name: 'SM2G4C20B' ,
        serialNumber: '1001' ,
        system: 'Storage Ring' ,
        componentType: 'Sext C' ,
        inventoryId: 795,
        typeDescription: '76mm, LONG SEXTUPOLE'  
    },
    {
        installId: 816,
        vendor: 'IHEP, China' ,
        name: 'SM2G4C21B' ,
        serialNumber: '1002' ,
        system: 'Storage Ring' ,
        componentType: 'Sext C' ,
        inventoryId: 796,
        typeDescription: '76mm, LONG SEXTUPOLE'  
    },
    {
        installId: 696,
        vendor: 'IHEP, China' ,
        name: 'SM2G4C17B' ,
        serialNumber: '1003' ,
        system: 'Storage Ring' ,
        componentType: 'Sext C' ,
        inventoryId: 797,
        typeDescription: '76mm, LONG SEXTUPOLE'  
    },
    {
        installId: 846,
        vendor: 'IHEP, China' ,
        name: 'SM2G4C22B' ,
        serialNumber: '1004' ,
        system: 'Storage Ring' ,
        componentType: 'Sext C' ,
        inventoryId: 798,
        typeDescription: '76mm, LONG SEXTUPOLE'  
    },
    {
        installId: 726,
        vendor: 'IHEP, China' ,
        name: 'SM2G4C18B' ,
        serialNumber: '1005' ,
        system: 'Storage Ring' ,
        componentType: 'Sext C' ,
        inventoryId: 799,
        typeDescription: '76mm, LONG SEXTUPOLE'  
    },
    {
        installId: 756,
        vendor: 'IHEP, China' ,
        name: 'SM2G4C19B' ,
        serialNumber: '1006' ,
        system: 'Storage Ring' ,
        componentType: 'Sext C' ,
        inventoryId: 800,
        typeDescription: '76mm, LONG SEXTUPOLE'  
    }];
