/**
 * @module minions-bundles-crm/views
 * Named query filters for Minions Bundle: Crm.
 */

export const bundleViews = {
  hotLeads: {
    description: 'Leads with high qualification score',
    type: 'lead',
    filter: {
      "qualificationScore": ">= 0.7"
},
  },
  stalledDeals: {
    description: 'Deals taking too long',
    type: 'deal',
  },
};

