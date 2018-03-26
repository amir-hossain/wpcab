import { Injectable } from '@angular/core';
const roles=[
  'User',
  'Leader',
  'Operator',
  'Admin',
  'Account',
  'Super'
]

const bloodGroup=[
  'A +',
  'A -',
  'B +',
  'B -',
  'O +',
  'O -',
  'AB +',
  'AB -'
]

const zone=[
  'Mirpur 6',
  'Shahalibag',
  'Mohakhali',
  'Gazipur',
  'Norshingdi',
  'Tepra',
  'Vuiyapur',
  'Mirpur 14',
  'Babu bazar',
  'Zinzira-Shuvada-Belna',
  'Badda-Batara-Gulshan',
  'Shekher gau',
  'Vober chor',
  'KAchpur-Narayanganj',
  'Savar',
  'Chadpur',
  'Shingair(Manikganj)',
  'Bibidh',
  'Mymensing(Haluyagat)',
  'Chittagong',
  'Khulna',
  'Kaula',
  'Kamrangichor',
  'Barha',
  'Barisal(Babu bazar)',
  'Zinzira(Taoyapatti)',
  'Tongi(Tilergati)',
  'Rajbari',
  'Dhalla(Singair)',
  'Madaripur'
]
const districts=[
'Barguna',
'Barisal',
'Bhola',
'Jhalokati',
'Patuakhali',
'Pirojpur',
'Bandarban',
'Brahmanbaria',
'Chandpur',
'Chittagong',
'Comilla',
"Cox's Bazar",
'Feni',
'Khagrachhari',
'Lakshmipur',
'Noakhali',
'Rangamati',
'Dhaka',
'Faridpur',
'Gazipur',
'Gopalganj',
'Jamalpur',
'Kishoreganj',
'Madaripur',
'Manikganj',
'Munshiganj',
'Mymensingh',
'Narayanganj',
'Narsingdi',
'Netrakona',
'Rajbari',
'Shariatpur',
'Sherpur',
'Tangail',
'Bagerhat',
'Chuadanga',
'Jessore',
'Jhenaidah',
'Khulna',
'Kushtia',
'Magura',
'Meherpur',
'Narail',
'Satkhira',
'Bogra',
'Joypurhat',
'Naogaon',
'Natore',
'Nawabganj',
'Pabna',
'Rajshahi',
'Sirajganj',
'Dinajpur',
'Gaibandha',
'Kurigram',
'Lalmonirhat',
'Nilphamari',
'Panchagarh',
'Rangpur',
'Thakurgaon',
'Habiganj',
'Moulvibazar',
'Sunamganj',
'Sylhet'
]

const subDistrict=[
'Akkelpur', 
'Joypurhat Sadar',
'Kalai' ,
'Khetlal', 
'Panchbibi', 
'Adamdighi',
'Bogra Sadar',
'Dhunat' ,
'Dhupchanchia', 
'Gabtali',
'Kahaloo',
'Nandigram', 
'Sariakandi', 
'Shajahanpur', 
'Sherpur',
'Shibganj', 
'Sonatola',
'Atrai',
'Badalgachhi', 
'Manda',
'Dhamoirhat', 
'Mohadevpur' ,
'Naogaon Sadar',
'Niamatpur' ,
'Patnitala' ,
'Porsha' ,
'Raninagar', 
'Sapahar' ,
'Bagatipara', 
'Baraigram' ,
'Gurudaspur' ,
'Lalpur' ,
'Natore Sadar',
'Singra' ,
'Naldanga', 
'Bholahat' ,
'Gomastapur', 
'Nachole' ,
'Nawabganj Sadar',
'Shibganj' ,
'Ataikula' ,
'Atgharia' ,
'Bera' ,
'Bhangura', 
'Chatmohar', 
'Faridpur' ,
'Ishwardi' ,
'Pabna Sadar',
'Santhia' ,
'Sujanagar', 
'Belkuchi' ,
'Chauhali' ,
'Kamarkhanda', 
'Kazipur' ,
'Raiganj' ,
'Shahjadpur', 
'Sirajganj Sadar',
'Tarash' ,
'Ullahpara', 
'Bagha' ,
'Bagmara', 
'Charghat', 
'Durgapur' ,
'Godagari' ,
'Mohanpur' ,
'Paba' ,
'Puthia', 
'Tanore' ,
'Boalia Thana',
'Matihar Thana',
'Rajpara Thana',
'Shah Mokdum Thana',
'Birampur' ,
'Birganj' ,
'Biral' ,
'Bochaganj', 
'Chirirbandar', 
'Phulbari' ,
'Ghoraghat' ,
'Hakimpur' ,
'Kaharole' ,
'Khansama' ,
'Dinajpur Sadar',
'Nawabganj' ,
'Parbatipur' ,
'Phulchhari' ,
'Gaibandha Sadar',
'Gobindaganj' ,
'Palashbari' ,
'Sadullapur' ,
'Sughatta' ,
'Sundarganj', 
'Bhurungamari', 
'Char Rajibpur',
'Chilmari' ,
'Phulbari' ,
'Kurigram Sadar',
'Nageshwari' ,
'Rajarhat' ,
'Raomari' ,
'Ulipur' ,
'Aditmari', 
'Hatibandha', 
'Kaliganj' ,
'Lalmonirhat Sadar',
'Patgram ',
'Dimla' ,
'Domar' ,
'Jaldhaka', 
'Kishoreganj', 
'Nilphamari Sadar',
'Saidpur' ,
'Atwari' ,
'Boda' ,
'Debiganj', 
'Panchagarh Sadar',
'Tetulia' ,
'Badarganj', 
'Gangachhara', 
'Kaunia' ,
'Rangpur Sadar',
'Mithapukur' ,
'Pirgachha' ,
'Pirganj' ,
'Taraganj' ,
'Baliadangi', 
'Haripur' ,
'Pirganj' ,
'Ranisankail', 
'Thakurgaon Sadar',
'Amtali' ,
'Bamna' ,
'Barguna Sadar',
'Betagi' ,
'Patharghata', 
'Taltoli ',
'Agailjhara', 
'Babuganj' ,
'Bakerganj' ,
'Banaripara' ,
'Gaurnadi' ,
'Hizla' ,
'Barisal Sadar',
'Mehendiganj' ,
'Muladi' ,
'Wazirpur', 
'Bhola Sadar',
'Burhanuddin' ,
'Char Fasson',
'Daulatkhan', 
'Lalmohan' ,
'Manpura' ,
'Tazumuddin', 
'Jhalokati Sadar',
'Kathalia' ,
'Nalchity' ,
'Rajapur' ,
'Bauphal' ,
'Dashmina' ,
'Galachipa' ,
'Kalapara' ,
'Mirzaganj' ,
'Patuakhali Sadar',
'Rangabali' ,
'Dumki' ,
'Bhandaria', 
'Kawkhali' ,
'Mathbaria' ,
'Nazirpur' ,
'Pirojpur Sadar',
'Nesarabad (Swarupkati)',
'Zianagor' ,
'Ali Kadam',
'Bandarban Sadar',
'Lama' ,
'Naikhongchhari', 
'Rowangchhari' ,
'Ruma' ,
'Thanchi', 
'Akhaura' ,
'Bancharampur', 
'Brahmanbaria Sadar',
'Kasba' ,
'Nabinagar', 
'Nasirnagar', 
'Sarail' ,
'Ashuganj', 
'Bijoynagar', 
'Chandpur Sadar',
'Faridganj' ,
'Haimchar' ,
'Haziganj' ,
'Kachua' ,
'Matlab Dakshin',
'Matlab Uttar',
'Shahrasti' ,
'Anwara' ,
'Banshkhali', 
'Boalkhali' ,
'Chandanaish', 
'Fatikchhari' ,
'Hathazari' ,
'Lohagara' ,
'Mirsharai' ,
'Patiya' ,
'Rangunia', 
'Raozan' ,
'Sandwip' ,
'Satkania' ,
'Sitakunda' ,
'Bandor (Chittagong Port) Thana',
'Chandgaon Thana',
'Double Mooring Thana',
'Kotwali Thana',
'Pahartali Thana',
'Panchlaish Thana',
'Barura' ,
'Brahmanpara', 
'Burichang' ,
'Chandina' ,
'Chauddagram', 
'Daudkandi' ,
'Debidwar' ,
'Homna' ,
'Laksam' ,
'Muradnagar', 
'Nangalkot' ,
'Comilla Adarsha Sadar',
'Meghna ',
'Titas' ,
'Monohargonj', 
'Comilla Sadar Dakshin',
'Chakaria',
"Cox's Bazar Sadar",
'Kutubdia' ,
'Maheshkhali', 
'Ramu' ,
'Teknaf', 
'Ukhia' ,
'Pekua' ,
'Chhagalnaiya', 
'Daganbhuiyan' ,
'Feni Sadar ',
'Parshuram' ,
'Sonagazi' ,
'Fulgazi' ,
'Dighinala', 
'Khagrachhari', 
'Lakshmichhari', 
'Mahalchhari' ,
'Manikchhari' ,
'Matiranga' ,
'Panchhari' ,
'Ramgarh' ,
'Lakshmipur Sadar',
'Raipur' ,
'Ramganj' ,
'Ramgati' ,
'Kamalnagar', 
'Begumganj' ,
'Noakhali Sadar',
'Chatkhil' ,
'Companiganj', 
'Hatiya' ,
'Senbagh' ,
'Sonaimuri', 
'Subarnachar', 
'Kabirhat' ,
'Bagaichhari', 
'Barkal' ,
'Kawkhali (Betbunia)',
'Belaichhari' ,
'Kaptai' ,
'Juraichhari', 
'Langadu' ,
'Naniyachar', 
'Rajasthali' ,
'Rangamati Sadar',
'Dhamrai' ,
'Dohar' ,
'Keraniganj', 
'Nawabganj' ,
'Savar' ,
'Alfadanga', 
'Bhanga' ,
'Boalmari', 
'Charbhadrasan', 
'Faridpur Sadar',
'Madhukhali' ,
'Nagarkanda' ,
'Sadarpur' ,
'Saltha' ,
'Gazipur Sadar',
'Kaliakair' ,
'Kaliganj' ,
'Kapasia' ,
'Sreepur' ,
'Gopalganj Sadar',
'Kashiani' ,
'Kotalipara', 
'Muksudpur' ,
'Tungipara' ,
'Baksiganj' ,
'Dewanganj' ,
'Islampur' ,
'Jamalpur Sadar',
'Madarganj' ,
'Melandaha' ,
'Sarishabari', 
'Astagram' ,
'Bajitpur' ,
'Bhairab' ,
'Hossainpur', 
'Itna' ,
'Karimganj', 
'Katiadi' ,
'Kishoreganj Sadar',
'Kuliarchar' ,
'Mithamain' ,
'Nikli' ,
'Pakundia', 
'Tarail' ,
'Rajoir' ,
'Madaripur Sadar',
'Kalkini' ,
'Shibchar' ,
'Daulatpur' ,
'Ghior' ,
'Harirampur', 
'Manikgonj Sadar',
'Saturia' ,
'Shivalaya', 
'Singair' ,
'Gazaria' ,
'Lohajang' ,
'Munshiganj Sadar',
'Sirajdikhan', 
'Sreenagar' ,
'Tongibari', 
'Bhaluka' ,
'Dhobaura' ,
'Fulbaria' ,
'Gaffargaon', 
'Gauripur' ,
'Haluaghat' ,
'Ishwarganj' ,
'Mymensingh Sadar',
'Muktagachha' ,
'Nandail' ,
'Phulpur' ,
'Trishal' ,
'Tara Khanda',
'Araihazar' ,
'Bandar' ,
'Narayanganj Sadar',
'Rupganj' ,
'Sonargaon', 
'Atpara' ,
'Barhatta', 
'Durgapur' ,
'Khaliajuri', 
'Kalmakanda' ,
'Kendua' ,
'Madan' ,
'Mohanganj', 
'Netrokona Sadar',
'Purbadhala' ,
'Baliakandi' ,
'Goalandaghat', 
'Pangsha' ,
'Rajbari Sadar',
'Kalukhali' ,
'Bhedarganj' ,
'Damudya' ,
'Gosairhat', 
'Naria' ,
'Shariatpur Sadar',
'Zanjira' ,
'Shakhipur', 
'Jhenaigati', 
'Nakla' ,
'Nalitabari', 
'Sherpur Sadar',
'Sreebardi' ,
'Gopalpur' ,
'Basail' ,
'Bhuapur' ,
'Delduar' ,
'Ghatail' ,
'Kalihati' ,
'Madhupur' ,
'Mirzapur' ,
'Nagarpur' ,
'Sakhipur' ,
'Dhanbari' ,
'Tangail Sadar',
'Narsingdi Sadar',
'Belabo' ,
'Monohardi', 
'Palash' ,
'Raipura' ,
'Shibpur' ,
'Bagerhat Sadar',
'Chitalmari' ,
'Fakirhat' ,
'Kachua' ,
'Mollahat', 
'Mongla' ,
'Morrelganj', 
'Rampal' ,
'Sarankhola', 
'Alamdanga' ,
'Chuadanga Sadar',
'Damurhuda' ,
'Jibannagar' ,
'Abhaynagar' ,
'Bagherpara' ,
'Chaugachha' ,
'Jhikargachha', 
'Keshabpur' ,
'Jessore Sadar',
'Manirampur' ,
'Sharsha' ,
'Harinakunda', 
'Jhenaidah Sadar',
'Kaliganj' ,
'Kotchandpur', 
'Maheshpur' ,
'Shailkupa' ,
'Batiaghata' ,
'Dacope' ,
'Dumuria' ,
'Dighalia' ,
'Koyra' ,
'Paikgachha', 
'Phultala' ,
'Rupsha' ,
'Terokhada', 
'Daulatpur Thana',
'Khalishpur Thana',
'Khan Jahan Ali Thana',
'Kotwali Thana',
'Sonadanga Thana',
'Harintana Thana',
'Bheramara' ,
'Daulatpur' ,
'Khoksa' ,
'Kumarkhali', 
'Kushtia Sadar',
'Mirpur' ,
'Shekhpara', 
'Magura Sadar',
'Mohammadpur',
'Shalikha' ,
'Sreepur' ,
'Gangni' ,
'Meherpur Sadar',
'Mujibnagar' ,
'Kalia' ,
'Lohagara', 
'Narail Sadar',
'Naragati Thana',
'Assasuni' ,
'Debhata' ,
'Kalaroa' ,
'Kaliganj' ,
'Satkhira Sadar',
'Shyamnagar' ,
'Tala' ,
'Ajmiriganj' ,
'Bahubal' ,
'Baniyachong', 
'Chunarughat' ,
'Habiganj Sadar',
'Lakhai' ,
'Madhabpur', 
'Nabiganj' ,
'Barlekha' ,
'Kamalganj' ,
'Kulaura' ,
'Moulvibazar Sadar',
'Rajnagar' ,
'Sreemangal', 
'Juri' ,
'Bishwamvarpur', 
'Chhatak' ,
'Derai' ,
'Dharampasha', 
'Dowarabazar' ,
'Jagannathpur' ,
'Jamalganj' ,
'Sullah' ,
'Sunamganj Sadar',
'Tahirpur' ,
'South Sunamganj',
'Balaganj' ,
'Beanibazar', 
'Bishwanath' ,
'Companigonj' ,
'Fenchuganj' ,
'Golapganj' ,
'Gowainghat' ,
'Jaintiapur' ,
'Kanaighat' ,
'Sylhet Sadar',
'Zakiganj',
'South Shurma'

]
@Injectable()
export class DropDownItemsService {
  getRoles(){
    return roles;
  }

  getDistricts(){
    return districts;
  }

  getSubDistrict(){
    return subDistrict;
  }

  getZone(){
    return zone;
  }

  getBloodGroup(){
    return bloodGroup;
  }
}
