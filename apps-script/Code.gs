// Agent Alternance : tableau de bord web qui lit le Google Sheet rempli par n8n.
// Le Sheet reste la base de données, cette page sert d'interface.

const NOM_ONGLET = 'Sheet1';
const STATUTS = ['À postuler', 'Postulé', 'Contacté', 'Entretien', 'Refusé', 'À voir', 'Erreur IA'];

// Affiche la page web
function doGet() {
  return HtmlService.createHtmlOutputFromFile('Index')
    .setTitle('Agent Alternance')
    .addMetaTag('viewport', 'width=device-width, initial-scale=1');
}

function feuille_() {
  const classeur = SpreadsheetApp.getActive();
  return classeur.getSheetByName(NOM_ONGLET) || classeur.getSheets()[0];
}

// Envoie toutes les offres à la page
function getOffres() {
  const valeurs = feuille_().getDataRange().getDisplayValues();
  if (valeurs.length < 2) return [];
  const entetes = valeurs[0];
  return valeurs.slice(1)
    .map((ligne, i) => {
      const offre = { ligne: i + 2 };
      entetes.forEach((nom, j) => { offre[nom] = ligne[j]; });
      return offre;
    })
    .filter((offre) => offre['Poste'] || offre['Entreprise']);
}

// Met à jour le statut d'une offre depuis la page
function setStatut(ligne, statut) {
  if (STATUTS.indexOf(statut) === -1) throw new Error('Statut inconnu');
  const feuille = feuille_();
  const entetes = feuille.getRange(1, 1, 1, feuille.getLastColumn()).getValues()[0];
  const colonne = entetes.indexOf('Statut') + 1;
  if (!colonne) throw new Error('Colonne « Statut » introuvable');
  feuille.getRange(Number(ligne), colonne).setValue(statut);
  return true;
}

// Menu dans le Sheet pour ouvrir le tableau de bord
function onOpen() {
  SpreadsheetApp.getUi()
    .createMenu('Agent Alternance')
    .addItem('Ouvrir le tableau de bord', 'ouvrirTableau')
    .addToUi();
}

// Adresse du tableau de bord, avec le domaine de l'école pour forcer le bon compte Google
const URL_TABLEAU = 'COLLE_ICI_L_URL_DE_TON_APPLICATION_WEB';

function ouvrirTableau() {
  const html = HtmlService.createHtmlOutput(
    '<p style="font-family:Arial;font-size:14px">Ton tableau de bord :</p>' +
    '<p><a href="' + URL_TABLEAU + '" target="_blank" style="font-family:Arial;font-size:16px">Ouvrir Agent Alternance</a></p>'
  ).setWidth(320).setHeight(120);
  SpreadsheetApp.getUi().showModelessDialog(html, 'Agent Alternance');
}
