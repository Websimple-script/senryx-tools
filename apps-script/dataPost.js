function doGet(e) {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var params = e.parameter;

  // Checklist lead
  if (params.source === 'checklist') {
    var checklistSheet = ss.getSheetByName('Checklist Leads');
    if (!checklistSheet) {
      checklistSheet = ss.insertSheet('Checklist Leads');
      checklistSheet.appendRow(['First Name', 'Email', 'Date']);
    }
    checklistSheet.appendRow([
      params.firstName,
      params.email,
      new Date().toLocaleString()
    ]);
  }

  // Scorecard lead
  if (params.firstName && params.score) {
    var scorecardSheet = ss.getSheetByName('Independence Leads');
    if (!scorecardSheet) {
      scorecardSheet = ss.insertSheet('Independence Leads');
      scorecardSheet.appendRow(['First Name', 'Email', 'Score', 'Tier', 'Date']);
    }
    scorecardSheet.appendRow([
      params.firstName,
      params.email,
      params.score,
      params.tier,
      new Date().toLocaleString()
    ]);
  }

if (params.source === 'retention-calculator') {
  var retentionSheet = ss.getSheetByName('Retention Leads');
  if (!retentionSheet) {
    retentionSheet = ss.insertSheet('Retention Leads');
    retentionSheet.appendRow(['First Name', 'Agency Name', 'Email', 'Policies', 'Rev/Policy', 'New Policies/Yr', 'Retention Rate', 'Behavior Score %', 'Date']);
  }
  retentionSheet.appendRow([
    params.firstName,
    params.agencyName,
    params.email,
    params.policies,
    params.revPerPolicy,
    params.newPolicies,
    params.retention,
    params.behaviorScore,
    new Date().toLocaleString()
  ]);
}

  return ContentService
    .createTextOutput(JSON.stringify({ result: 'success' }))
    .setMimeType(ContentService.MimeType.JSON);
}