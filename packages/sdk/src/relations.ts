/**
 * @module minions-bundles-crm/relations
 * Relation definitions for Minions Bundle: Crm.
 */

export const bundleRelations = [
  { from: 'lead', relation: 'works_at', to: 'organization' },
  { from: 'deal', relation: 'owned_by', to: 'lead' },
  { from: 'interaction', relation: 'with', to: 'lead' },
];

