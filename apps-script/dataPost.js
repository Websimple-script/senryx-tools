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
        'Channel: knows top 3 sources',
        'Channel: pipeline resilience',
        'Channel: healthy mix',
        'Vendor: can replace vendors',
        'Vendor: system runs itself',
        'People: resilient w/o key person',
        'People: team knows strategy',
        'Platform: survives changes',
        'System: knows acq. cost',
        'System: reviews data monthly',
        'Cat: Channel (/12)', 'Cat: Vendor (/8)', 'Cat: People (/8)', 'Cat: Platform (/4)', 'Cat: System (/8)',
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

// Positioning Analyzer lead
  if (params.source === 'positioning-analyzer') {
    var positioningSheet = ss.getSheetByName('Positioning Leads');
    if (!positioningSheet) {
      positioningSheet = ss.insertSheet('Positioning Leads');
      positioningSheet.appendRow([
        'First Name', 'Email', 'Profile', 'Total (/48)',
        'Clarity (/16)', 'Differentiation (/16)', 'Presence (/16)',
        'Clarity: clear 1-sentence answer',
        'Clarity: can describe ideal client',
        'Clarity: knows top revenue/margin services',
        'Clarity: can answer "why you" in 30 sec',
        'Differentiation: has defined niche',
        'Differentiation: website is specific',
        'Differentiation: clients give specific reason for choosing',
        'Differentiation: knows competitive difference',
        'Presence: GBP claimed & updated',
        'Presence: meaningful Google reviews',
        'Presence: consistently visible pre-shopping',
        'Presence: strong name search result',
        'Date'
      ]);
    }
    positioningSheet.appendRow([
      params.firstName,
      params.email,
      params.profile,
      params.total,
      params.clarity,
      params.differentiation,
      params.presence,
      params.a1, params.a2, params.a3, params.a4,
      params.a5, params.a6, params.a7, params.a8,
      params.a9, params.a10, params.a11, params.a12,
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