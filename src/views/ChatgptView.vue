<template>
  <div class="remedy">
    <div class="input-prompt">
      <h1 class="Ai">Chat with OpenAI</h1>
      <h2>SEO Prompt</h2>
      <!-- Input fields to enter the prompts -->
      <!--<textarea v-model="ruleSetForPrompt" placeholder="Enter the rule set for the prompt" rows="10"></textarea>-->

                      <!----------------- longtail keywords & Headlines --------------------->
             <p>Long-tail keyword anført med nr.</p>
                 <input required v-model="promptInputDataLongTailKeywords" placeholder=" Long-tail keywords...." />
                    <p>Overskrifter anført med nr.</p>
                       <input v-model="promptInputHeadlines" placeholder="Overskrifter...." />


                     <!------------------- specifikke instruktioner -------------------->
             <p class="overskrift">Specifikationer for output</p>
                <p>Vælg kundetype:</p>
                   <select v-model="specificInformationPromptDataTypeOfCustomer">
                      <option  value="B2C">B2C</option>
                       <option value="B2B">B2B</option>
                          </select>

                              <p>Hvad søger kunden under besøget af undersiden</p>
                                 <input v-model="specificInformationPromptDataCustomerNeeds" placeholder=" F.eks. tømrerarbejde til nybyggeri og renovering " />

                                    <p>Beskriv mulig problemstilling</p>
                                       <input v-model="specificInformationPromptDataIssues" placeholder="F.eks. finde den rette tømre?" />


      
                                  <!--------------------- seo startegi ------------------->
               <p class="overskrift">Indsæt din Seo startegi</p>
                 <p>Undersidens primære søgeord</p>
                    <input v-model="keywordsSpecificationsDataThekeywords" placeholder="Primære søgeord" />
                        <p>Sekundære søgeord</p>
                           <input v-model="keywordsSpecificationsDataSekundæreKeywords" placeholder="Sekundære Søgeord" />
                             <p>Søgeordstæthed i %</p>
                                <input v-model="keywordsSpecificationsDataTæthedsProcent" placeholder=" F.eks. 2 %" />
                                   <p>Søgeord i forhold til antal ord</p>
                                      <input v-model="keywordsSpecificationsDataTæthedsLængde" placeholder="F.eks. 1000" />



                               <!------------------  top section ------------------->
                <p class="overskrift"> Indhold 1. sektion</p>

                   <p> Vælg Overskrift - fra din liste din.</p>
                      <input v-model="headlinesTopSection" placeholder="Overskrift Nr." />

                         <p> Firmaets Navn</p>
                           <input v-model="costumerName" placeholder=" F.eks. Helles negle salon" />

                             <p>Længden af 1. sektion</p>
                               <input v-model="numberOfWordsTop" placeholder="Antal ord" />


                       <!---------------------- middle section ------------------------>
                   <p class="overskrift">Indhold 2. sektion</p>

                        <p> Vælg Overskrift - fra din liste din.</p>
                            <input v-model="headlineMiddleSection" placeholder="Overskrift Nr." />

                             <p> Long-tail keywords fra listen </p>
                                  <input v-model="numberOfLongtailKeywordsMiddleSection" placeholder="Long-tail keywords Nr." />
     
                                       <p>Længden af 2. sektion</p>
                                          <input v-model="numberOfWordsMiddle" placeholder="Antal ord" />


                            <!------------------------- bottom section ---------------------->
                    <p class="overskrift">Indhold til 3 sektion (CTA)</p>

                   <p> Vælg Overskrift - fra din liste din.</p>
                        <input v-model="headlineBottomSection" placeholder="Overskrift Nr." />

                           <p> Long-tail keywords fra listen </p>
                              <input v-model="numberOfLongtailKeywordsBottomSection" placeholder="Long-tail keywords Nr." />
                                
                                <p>Mail til CTA</p>
                                   <input v-model="emailToCta" placeholder="Email" />
                                 
                                      <p>Kontakt Nr. til CTA</p>
                                         <input v-model="phoneNumberCostumer" placeholder="Telefonnummer" />
     
                                         <p>Kontakt side</p>
                                            <input v-model="contaktSiteOnCostomer" placeholder="Kontakt side url" />
     
                                            <p>Længden af 2. sektion</p>
                                               <input v-model="numberOfWordsBottom" placeholder="Antal ord" />


                          <!---------------------  tone of voice -------------------------->
      
                   <p class="overskrift"> Sprog niveau & Tone of voice for outputs</p>

                      <p> Sprog</p>
                          <input v-model="languageOnPrompt" placeholder=" F.eks. Dansk" />
                         <p> Sprog niveau</p>
                             <input v-model="languageLevelOnPrompt" placeholder=" F.eks. Grundlæggende" />
                               <p> Tone</p>
                                 <input v-model="toneOfVoiceOnPrompt" placeholder="F. eks. uformel, klar og overbevisende
" />
                                          
                          <!-------------------- lokalt fokus ----------------->
                    <p class="overskrift"> Lokalt Fokus</p>

                        <p> Firmaets lokation</p>
                            <input v-model="locationOfTheCostumer" placeholder="F.eks. Rønne" />
                         
                              <p> Lokal SEO strategi</p>
                                 <input v-model="localSeoStrategy" placeholder="F.eks - Esbjerg - Varde - Bramming" />

                          <!------------------ Referencer ------------------->

                  <p class="overskrift"> Referencer</p>

                       <input v-model="referencerText" placeholder="Referencer" />

                         <!------------------ Interne Links ----------------------->

                 <p class="overskrift"> Interne Links</p>

                      <input v-model="internLinksOnSite" placeholder="Interne links" />



      <button @click="chatclick()">Give response</button>
    </div>

    <div class="outputs-prompt" style="overflow: scroll">
      <p class="res-p">Response: {{ response }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import axios from 'axios';

// Rule set for the prompt
const ruleSetForPrompt = ref(`
Regler for Interaktion og Specifikationer for Output:
  -§1. 1. Interne Links: Interne links skal inkorporeres naturligt i teksten, hvor hvert link er et enkelt ord, der direkte relaterer til den målrettede underside.
  -§1. 2. B2C vs. B2B Sprogbrug: Brug specifikt sprog baseret på målgruppen:
  For B2C (Business to Consumer): Undgå at bruge udtryk som “partner”, som er mere passende i B2B-kontekster.
  For B2B (Business to Business): Udtryk som “partnerskab” er passende og kan bruges, når man diskuterer forretningsrelationer.
  -§1. 3. Beskrivelser af Performance: 
  Beskriv tjenester som “yderst tilfredsstillende” i stedet for at overgå forventninger.
  -§1. 4. nøgleord eller fraser, der ikke må inkluderes: 
  “omhu”, “æstetisk” “dedikeret”.
  -§2.1. Formålets Specifikation:
  Alt genereret indhold er til SEO- og marketingformål, sigtet mod at være unikt, men stadig inkorporere specificerede søgeord og strukturer. Dette indhold vil blive brugt både på forsider og undersider.
  -§2.2. Sprogbrug:
  Anvend Natural Language Processing (NLP) teknikker for at undgå teknisk jargon eller komplekse termer, medmindre andet speci-fikt er instrueret.
  -§2.3. Feedback:
  Anmod om yderligere informationer, hvis det kunne forbedre outputkvaliteten.
  -§3.1. Etik og Lovgivning:
  Engagér dig ikke i eller anmod om støtte til ulovlige aktiviteter eller sådanne, der kunne overtræde etiske retningslinjer. Respekter privatlivets fred og del ikke følsomme personoplysninger.
  -§4.1. Respektfuld Interaktion:

  prompt starter her:
`);

// Define reactive data properties using ref()

//Longtail Keywords
const longtailKeywordsList = ref('')
const promptInputDataLongTailKeywordsString = ref(`
longtail keywords: ${longtailKeywordsList.value}
`)
//Headslines
const promptInputHeadlines = ref('');
const promptHeadlinesListString = ref(`
overskrift: ${promptInputHeadlines.value}
`)




// constant for the prompt for the specific information
const specificInformationPromptData = ref(`
-Du er en empatisk SEO-specialist, - Der altid opdatere sig i forhold til  “Regler for Interaktion og Specifikationer før du genere en LLM
-Du skal forholder dig til “Regler for Interaktion og Specifikationer for Output”  §1- §5.
`);



const specificInformationPromptDataTypeOfCustomer = ref(`B2C`)  // default to B2C
const specificInformationPromptDataCustomerNeeds = ref(``)
const specificInformationPromptDataIssues = ref(``)
const specificInformationPromptDataTypeOfCustomerString = ref(`
-Promptens output er velegnet til ${specificInformationPromptDataTypeOfCustomer.value}, der fokuserer på personer, der har brug for ${specificInformationPromptDataCustomerNeeds.value}.
-Fremhæv almindelige udfordringer ved at finde ${specificInformationPromptDataIssues.value}.
`)


// constant for the prompt for the keyword instrcutions 

const keywordsSpecificationsDataThekeywords = ref(``)
const keywordsSpecificationsDataSekundæreKeywords = ref(``)
const keywordsSpecificationsDataTæthedsProcent = ref(`2%`)
const keywordsSpecificationsDataTæthedsLængde = ref(`1000`)
const keywordsSpecificationsDataString = ref(`
Søgeordsinstruktioner:
-Primært søgeord: - ${keywordsSpecificationsDataThekeywords.value},

-Sekundære søgeord: -${keywordsSpecificationsDataSekundæreKeywords.value},

-Søgeordstæthed skal være ${keywordsSpecificationsDataTæthedsProcent.value} i forhold til ${keywordsSpecificationsDataTæthedsLængde.value}ord.
`)

//top section site
const numberOfWordsTop = ref(`100`)
const headlinesTopSection = ref(`1`)
const costumerName = ref(``)
const promptStrukturOgFormatTopString = ref(`
Struktur og Format:

-Indholdet skal opdeles i tre sektioner

-Informativ Sektion: skal anvende “overskrift” nr.${headlinesTopSection.value}, med med fokus på primært søgeord. Diskuter den service, som ${costumerName.value} udfører,  Minimum ${numberOfWordsTop.value} ord.
`)

//middle section
const headlineMiddleSection = ref(`2`)
const numberOfLongtailKeywordsMiddleSection = ref(`3`)
const numberOfWordsMiddle = ref(`100`)
const promptStrukturOgFormatMiddleString = ref(`
-Detaljeret udførsel af Service Sektion: Brug “overskrift” nr.${headlineMiddleSection.value} til at detaljere tjenester relateret til det primære søgeord med inddragelse af "longtail keywords" nr.: ${numberOfLongtailKeywordsMiddleSection.value} . Minimum ${numberOfWordsMiddle.value} ord. Inkluder punktopstillinger eller lister for klarhed.



`)

//bottom section
const headlineBottomSection = ref(`3`)
const numberOfLongtailKeywordsBottomSection = ref(`4`)
const emailToCta = ref(``)
const phoneNumberCostumer = ref(``)
const contaktSiteOnCostomer = ref(``)
const numberOfWordsBottom = ref(`100`)
const promptStrukturOgFormatBottomString = ref(`
-CTA Sektion: skal anvende “overskrift”  nr. ${headlineBottomSection.value} og skal være en prima være CTA sektion og tage udgangspunkt i "longtail keywords"  nr. ${ numberOfLongtailKeywordsBottomSection.value}, der skal altid laves CTA  på kundensinformationer, ud fra disse: kundens informationer mail: ${ emailToCta.value} Telefonnummer: ${phoneNumberCostumer.value}, der skal derudover laves en internlink til deres underside med kontakt ${contaktSiteOnCostomer.value} og skal være på min ${numberOfWordsBottom.value} ord.

`)

//tone og sprog niveau
const languageOnPrompt = ref(``)
const languageLevelOnPrompt = ref(``)
const toneOfVoiceOnPrompt = ref(``)
const toneOfVoiceString = ref(`
tone og sprog niveau:
-Sprog ${languageOnPrompt.value}
-sprog niveau: ${ languageLevelOnPrompt.value}
-Tone: ${toneOfVoiceOnPrompt.value}

`)


//location of the prompt
const locationOfTheCostumer = ref(``)
const localSeoStrategy = ref(``)
const promptLocalSeoString = ref(`
Lokalt Fokus:

-Målområder inkluderer
-firmaets lokation: ${locationOfTheCostumer.value}
-lokal fokus: ${localSeoStrategy.value}
-hvilket fremhæver firmaets placering og lokal relevans.





`)
//Referencer
const referencerText = ref(``)
const referencerTextString = ref(`
Referencer: ${ referencerText.value}
`)

// intern links
const internLinksOnSite = ref(``)
const internLinksOnSiteString = ref(`
Interne Links:

-Indlejr altid interne links naturligt i teksten, der linker til relaterede undersider såsom: 

${ internLinksOnSite.value}
`)



// Compute the complete prompt string
const promptInputData = computed(() => {
  return `
  ${ruleSetForPrompt.value} 
  longtail keywords: ${promptInputDataLongTailKeywordsString.value} 
  overskrift: ${promptHeadlinesListString.value} 
  specifikke instruktioner: ${specificInformationPromptData.value} ${specificInformationPromptDataTypeOfCustomerString.value} 
  keyword instrcutions: ${keywordsSpecificationsDataString.value} 
  Top section site: ${promptStrukturOgFormatTopString.value}
  Middle section: ${promptStrukturOgFormatMiddleString.value}
  Bottom section: ${promptStrukturOgFormatBottomString.value}
  tone og sprog niveau: ${toneOfVoiceString.value}
  Lokalt Fokus: ${promptLocalSeoString.value}
  Referencer: ${referencerTextString.value}
  Intern Links: ${internLinksOnSiteString.value}
  
  
  
  
  
  
  

  `});








const response = ref('');

const chatclick = async () => {
  await fetchChatResponse();

};

// Function to send the prompt to your server and receive the response
const fetchChatResponse = async () => {

  try {
    // localhost test: 'http://localhost:3000/testch
    // rendertest: 'https://exam2024-mmd4-cgpt.onrender.com/testchat'
    console.log('Fetching response from the backend...');
    const result = await axios.post('https://exam2024-mmd4-cgpt.onrender.com/testchat', {
      userMessage: promptInputData.value
    });


    // Update response value with the result data
    if (result.data.message) {
      console.log('Received response:', result.data.message);
      response.value = result.data.message;
    } else {
      response.value = "No valid response received.";
    }

  } catch (error) {
    console.error('Error fetching response:', error);
    response.value = 'Failed to get a response.';
  }
};


</script>

<style>
.remedy {
  .remedy {
    display: flex;
    justify-content: space-between;
   width: 100%;

     }

  .input-prompt,
  .outputs-prompt {
    
    flex: 2;
   
    padding: 20px;
    /* border: 1px solid #ccc; */
    border-radius: 48px;
   /*  background-color: rgba(248, 225, 243, 0.555); */
    color: rgb(255, 255, 255);
    font-family: bookman;
    font-size: 15px;
    width: 80vh;
    -ms-flex-item-align: start;
  }
  .input-prompt {
    margin-right: 10px;
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.1));
-webkit-backdrop-filter: blur(20px);
box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
 
  border: 1px solid rgba( 255, 255 255, 0.18);
  border-radius: 32px;
  box-sizing: 80%;
  align-items: flex-start;
  max-width: 80%;
}

  .input-prompt {
    margin-right: 10px;
    width: 80vh;
    height: auto;
   
  }

  .input-prompt input {
    width: 100%;
    padding: 10px;
    font-size: 16px;
    border: 1px solid #a4a1a1;
    border-radius: 5px;
    margin-bottom: 10px;
  }

  .outputs-prompt {
    display: flex;
    height: auto;
    align-items: flex-start;
    margin-left: 10px;
    color: rgba(37, 37, 37, 0.887);
    
    size: auto;
    background-color: #e7e7e7;

  resize: both;
  overflow: hidden;



  }
  

  .response p {
    font-size: 25px;
    margin-top: 20px;
    padding: 20px;
    border: 1px solid #212121;
    border-radius: 5px;
  }

  h2 {
    color: #ffffff8f;
    font-size: 25px;
    font-weight: 400;
    margin-bottom: 20px;

  }
}

.overskrift {
  font-size: 18px;
  font-weight: 500;
  margin-top: 20px;
  margin-bottom: 10px;
  
}
input {
  width: 100%;
  padding: 10px;
  font-size: 10px;
  border: 1px solid #363636;
  border-radius: 5px;
  margin-bottom: 10px;
  color: #717171;
}
select {
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #363636;
  border-radius: 5px;
  margin-bottom: 10px;
  color: #717171;
}

button {
  padding: 10px 20px;
  font-size: 16px;
  background-color: #ffffffa1;
  color: #fff;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  margin-top: 10px;
}
.res-p {
  font-size: 20px;
  margin-bottom: 10px;
  color: #494949d8;
  margin: 1rem;
}

.remedy {
  display: flex;


  justify-content: space-between;
  align-items: flex-start;
  align-content: top;
  width: 100%;
}

h1 {
  font-size: 30px;
  font-weight: 500;
  margin-bottom: 20px;
}


</style>
