// Milestone 1
// ● Replica della grafica con la possibilità di avere messaggi scritti dall’utente (verdi) e dall’interlocutore (bianco) assegnando due classi CSS diverse
// ● Visualizzazione dinamica della lista contatti: tramite la direttiva v-for, visualizzare nome e immagine di ogni contatto
// Milestone 2
// ● Visualizzazione dinamica dei messaggi: tramite la direttiva v-for, visualizzare tutti i messaggi relativi al contatto attivo all’interno del pannello della conversazione
// ● Click sul contatto mostra la conversazione del contatto cliccato
// Milestone 3
// ● Aggiunta di un messaggio: l’utente scrive un testo nella parte bassa e digitando
// “enter” il testo viene aggiunto al thread sopra, come messaggio verde
// ● Risposta dall’interlocutore: ad ogni inserimento di un messaggio, l’utente riceverà
// un “ok” come risposta, che apparirà dopo 1 secondo.
// Milestone 4
// ● Ricerca utenti: scrivendo qualcosa nell’input a sinistra, vengono visualizzati solo i contatti il cui nome contiene le lettere inserite (es, Marco, Matteo Martina -> Scrivo “mar” rimangono solo Marco e Martina)
// Milestone 5 - opzionale
// ● Cancella messaggio: cliccando sul messaggio appare un menu a tendina che permette di cancellare il messaggio selezionato




"use-strict"


const { createApp } = Vue;

const app = createApp({


    data() {


        return {
            rndAns: [ 'Non posso', 'Chi sei?', 'Ti piacciono i ricci di mare?', 'Hai comprato la maschera da sommozzatore?', 'La nonna s\'è rotta il femore', 'non so chi sia Davide', 'Ok?', 'Coding ain\'t easy', 'Marco non riesce a capire quando parla a sproposito', 'Mattia non troverà mai degli amici'],
            currentIndex: 0,
            newMessage: '',
            cerca: '',
            msgOpt:{
                index: null,
                show: false,
            },
            dark: false,
            contacts: [

                {
                    id: 0,
                    name: 'Michele',
                    avatar: '_1',
                    visible: true,
                    newMessage: '',
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Hai portato a spasso il cane?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Ricordati di stendere i panni',
                            status: 'sent'

                        },

                        {
                            date: '10/01/2020 16:15:22',
                            message: 'Tutto fatto!',
                            status: 'received'
                        },
                    ]
                },

                {
                    id: 1,
                    name: 'Fabio',
                    avatar: '_2',
                    visible: true,
                    newMessage: '',
                    messages: [
                        {
                            date: '20/03/2020 16:30:00',
                            message: 'Ciao come stai?',
                            status: 'sent'
                        },

                        {
                            date: '20/03/2020 16:30:55',
                            message: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received'
                        },

                        {
                            date: '20/03/2020 16:35:00',
                            message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent'
                        }
                    ],
                },

                {
                    id: 2,
                    name: 'Samuele',
                    avatar: '_3',
                    visible: true,
                    newMessage: '',
                    messages: [
                        {
                            date: '28/03/2020 10:10:40',
                            message: 'La Marianna va in campagna',
                            status: 'received'
                        },

                        {
                            date: '28/03/2020 10:20:10',
                            message: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent'
                        },

                        {
                            date: '28/03/2020 16:15:22',
                            message: 'Ah scusa!',
                            status: 'received'
                        }
                    ],
                },

                {
                    id: 3,
                    name: 'Alessandro B.',
                    avatar: '_4',
                    visible: true,
                    newMessage: '',
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent'
                        },

                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Si, ma preferirei andare al cinema',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent'
                        },

                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Si, ma preferirei andare al cinema',
                            status: 'received'
                        },


                    ],
                },

                {
                    id: 4,
                    name: 'Alessandro L.',
                    avatar: '_5',
                    visible: true,
                    newMessage: '',
                    messages: [
                        {

                            date: '10/01/2020 15:30:55',
                            message: 'Ricordati di chiamare la nonna',
                            status: 'sent'
                        },

                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Va bene, stasera la sento',
                            status: 'received'
                        },

                    ],
                },

                {
                    id: 5,
                    name: 'Claudia',
                    avatar: '_6',
                    visible: true,
                    newMessage: '',
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao Claudia, hai novità?',
                            status: 'sent'
                        },

                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Non ancora',
                            status: 'received'
                        },

                        {
                            date: '10/01/2020 15:51:00',
                            message: 'Nessuna nuova, buona nuova',
                            status: 'sent'
                        },
                    ],
                },

                {
                    id: 6,
                    name: 'Federico',
                    avatar: '_7',
                    visible: true,
                    newMessage: '',
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Fai gli auguri a Martina che è il suo compleanno!',
                            status: 'sent'
                        },

                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Grazie per avermelo ricordato, le scrivo subito!',
                            status: 'received'
                        },
                    ],
                },


                {
                    id: 7,
                    name: 'Davide',
                    avatar: '_8',
                    visible: true,
                    newMessage: '',
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao, andiamo a mangiare la pizza stasera?',
                            status: 'received'
                        },

                        {
                            date: '10/01/2020 15:50:00',
                            message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'OK!!',
                            status: 'received'
                        },
                    ],
                }
            ]
        }
    },


    computed: {

        filteredContacts() {
            return this.contacts.filter((user) => {
                const name = user.name.toLowerCase();
                return name.includes(this.cerca.toLowerCase())

            })
        }

    },


    methods: {

        //   funzione click
        getConv(id) {
            this.currentIndex = this.contacts.findIndex((item) => item.id === id)

        },

        //invio messaggio e auto risposta
        sendMessage() {
            if (!this.contacts[this.currentIndex].newMessage) return;

            function getFormattedDate(date) {
                return `${date.getDate() < 10 ? '0' + date.getDate() : date.getDate()}/${date.getMonth() < 10 ? '0' + date.getMonth() : date.getMonth()}/${date.getFullYear()} ${date.getHours() < 10 ? '0' + date.getHours() : date.getHours()}:${date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()}:${date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds()}`;
            }
            const d = new Date();
            let newDate = getFormattedDate(d);
            console.log(d)
            console.log(newDate)

            const newmessage = {
                date: newDate,
                message: this.contacts[this.currentIndex].newMessage,
                status: 'sent'
            }

            this.contacts[this.currentIndex].messages.push(newmessage);
            this.contacts[this.currentIndex].newMessage = ''

            this.$nextTick(()=> {
                const el =  this.$refs.msg[this.$refs.msg.length - 1 ];
                el.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
            })

            setTimeout(() => {

                rndMsg = this.rndAns[Math.floor(Math.random() * this.rndAns.length)];

                const newmessage = {
                    date: newDate,
                    message: rndMsg,
                    status: 'received'
                }

                this.contacts[this.currentIndex].messages.push(newmessage);
                this.$nextTick(()=> {
                    const el =  this.$refs.msg[this.$refs.msg.length - 1 ];
                    el.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
                })
                                         
            }, 2000);
        },

        truncate(str, maxlength) {
            return (str.length > maxlength) ? str.slice(0, maxlength - 1) + '…' : str;
        },


        deleteMsg(i){
            console.log(this.contacts[this.currentIndex].messages);
            this.contacts[this.currentIndex].messages.splice(i,1);
            this.msgOpt.show = false
        },

        toggleOpt(i){
            if(i === this.msgOpt.index && this.msgOpt.show){
                this.msgOpt.index= null;
                this.msgOpt.show = false;

            } else {
                this.msgOpt.index= i;
                this.msgOpt.show = true;
            }
        },

        getLastMsg(i){
            const lastMsg = i.messages.filter((el)=> el.status === 'received');

            if(lastMsg == 0){
                return {
                    date: 'nope',
                    message: 'noper',
                    status: 'received'
                    
                }
            } 

            return lastMsg[lastMsg.length-1]
            
            
        },

        darkmode(){
            this.dark = !this.dark
        }

        






    }





}).mount("#app")

