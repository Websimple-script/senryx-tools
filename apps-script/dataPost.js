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
      scorecardSheet.appendRow([
        'First Name', 'Email', 'Score', 'Tier',
        'Q1', 'Q2', 'Q3', 'Q4', 'Q5', 'Q6', 'Q7', 'Q8', 'Q9', 'Q10',
        'Channel', 'Vendor', 'People', 'Platform', 'System',
        'Date'
      ]);
    }
    scorecardSheet.appendRow([
      params.firstName,
      params.email,
      params.score,
      params.tier,
      params.a1, params.a2, params.a3, params.a4, params.a5,
      params.a6, params.a7, params.a8, params.a9, params.a10,
      params.cat_channel, params.cat_vendor, params.cat_people, params.cat_platform, params.cat_system,
      new Date().toLocaleString()
    ]);
  }

if (params.source === 'retention-calculator') {
  var retentionSheet = ss.getSheetByName('Retention Leads');
  if (!retentionSheet) {
    retentionSheet = ss.insertSheet('Retention Leads');
    retentionSheet.appendRow([
      'First Name', 'Agency Name', 'Email',
      'Policies', 'Rev/Policy', 'New Policies/Yr', 'Retention Rate',
      'Rate Outreach', 'Re-quote', 'Renewal Reminders', 'Ongoing Value',
      'Behavior Score %', 'Date'
    ]);
  }
  retentionSheet.appendRow([
    params.firstName,
    params.agencyName,
    params.email,
    params.policies,
    params.revPerPolicy,
    params.newPolicies,
    params.retention,
    params.rateOutreach,
    params.requote,
    params.renewal,
    params.ongoing,
    params.behaviorScore,
    new Date().toLocaleString()
  ]);
}

  return ContentService
    .createTextOutput(JSON.stringify({ result: 'success' }))
    .setMimeType(ContentService.MimeType.JSON);
}