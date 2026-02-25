/**
 * @module minions-bundles-crm/bundle
 * MinionType definitions and imports for Minions Bundle: Crm.
 */

import type { MinionType } from 'minions-sdk';


// --- Inline Bundle Types ---

export const personType: MinionType = {
  id: 'bundle-crm-person',
  name: 'Person',
  slug: 'person',
  description: 'A human being',
  icon: '👤',
  schema: [
    { name: 'firstName', type: 'string', label: 'firstName' },
    { name: 'lastName', type: 'string', label: 'lastName' },
    { name: 'email', type: 'string', label: 'email' },
    { name: 'phone', type: 'string', label: 'phone' },
  ],
};

export const organizationType: MinionType = {
  id: 'bundle-crm-organization',
  name: 'Organization',
  slug: 'organization',
  description: 'A company or other entity',
  icon: '🏢',
  schema: [
    { name: 'name', type: 'string', label: 'name' },
    { name: 'website', type: 'string', label: 'website' },
    { name: 'industry', type: 'string', label: 'industry' },
  ],
};

export const leadType: MinionType = {
  id: 'bundle-crm-lead',
  name: 'Lead',
  slug: 'lead',
  description: 'A tracked relationship with a potential or existing client',
  icon: '🎯',
  // extends: 'person',
  schema: [
    { name: 'source', type: 'string', label: 'source' },
    { name: 'status', type: 'select', label: 'status' },
    { name: 'assignedTo', type: 'string', label: 'assignedTo' },
    { name: 'estimatedValue', type: 'number', label: 'estimatedValue' },
    { name: 'currency', type: 'string', label: 'currency' },
    { name: 'nextActionDate', type: 'date', label: 'nextActionDate' },
    { name: 'lostReason', type: 'string', label: 'lostReason' },
    { name: 'qualificationScore', type: 'number', label: 'qualificationScore' },
  ],
};

export const dealType: MinionType = {
  id: 'bundle-crm-deal',
  name: 'Deal',
  slug: 'deal',
  description: 'A concrete commercial opportunity',
  icon: '💰',
  schema: [
    { name: 'title', type: 'string', label: 'title' },
    { name: 'leadId', type: 'string', label: 'leadId' },
    { name: 'orgId', type: 'string', label: 'orgId' },
    { name: 'stage', type: 'select', label: 'stage' },
    { name: 'value', type: 'number', label: 'value' },
    { name: 'currency', type: 'string', label: 'currency' },
    { name: 'probability', type: 'number', label: 'probability' },
    { name: 'expectedCloseDate', type: 'date', label: 'expectedCloseDate' },
    { name: 'actualCloseDate', type: 'date', label: 'actualCloseDate' },
    { name: 'lostReason', type: 'string', label: 'lostReason' },
  ],
};

export const interactionType: MinionType = {
  id: 'bundle-crm-interaction',
  name: 'Interaction',
  slug: 'interaction',
  description: 'A record of an interaction with a lead',
  icon: '💬',
  schema: [
    { name: 'leadId', type: 'string', label: 'leadId' },
    { name: 'type', type: 'select', label: 'type' },
    { name: 'date', type: 'date', label: 'date' },
    { name: 'notes', type: 'string', label: 'notes' },
    { name: 'outcome', type: 'string', label: 'outcome' },
  ],
};

// --- Bundle Export ---

export const bundleTypes: MinionType[] = [
  personType,
  organizationType,
  leadType,
  dealType,
  interactionType,
];

