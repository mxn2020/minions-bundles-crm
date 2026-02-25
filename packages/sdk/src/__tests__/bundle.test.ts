import { describe, it, expect } from 'vitest';
import { bundleTypes } from '../bundle.js';
import { VERSION } from '../index.js';

describe('Bundle SDK', () => {
    it('should export a version string', () => {
        expect(VERSION).toBeDefined();
        expect(typeof VERSION).toBe('string');
    });

    it('should have bundleTypes array populated', () => {
        expect(bundleTypes).toBeDefined();
        expect(Array.isArray(bundleTypes)).toBe(true);
        expect(bundleTypes.length).toBeGreaterThan(0);
    });

    it('should define the personType schema correctly', () => {
        const type = bundleTypes.find(t => t.slug === 'person');
        expect(type).toBeDefined();
        expect(type?.name).toBe('Person');
        expect(type?.schema.length).toBe(4);

        const fieldNames = type?.schema.map(f => f.name);
        expect(fieldNames).toContain('firstName');
        expect(fieldNames).toContain('lastName');
        expect(fieldNames).toContain('email');
        expect(fieldNames).toContain('phone');
    });

    it('should define the organizationType schema correctly', () => {
        const type = bundleTypes.find(t => t.slug === 'organization');
        expect(type).toBeDefined();
        expect(type?.name).toBe('Organization');
        expect(type?.schema.length).toBe(3);

        const fieldNames = type?.schema.map(f => f.name);
        expect(fieldNames).toContain('name');
        expect(fieldNames).toContain('website');
        expect(fieldNames).toContain('industry');
    });

    it('should define the leadType schema correctly', () => {
        const type = bundleTypes.find(t => t.slug === 'lead');
        expect(type).toBeDefined();
        expect(type?.name).toBe('Lead');
        expect(type?.schema.length).toBe(8);

        const fieldNames = type?.schema.map(f => f.name);
        expect(fieldNames).toContain('source');
        expect(fieldNames).toContain('status');
        expect(fieldNames).toContain('assignedTo');
        expect(fieldNames).toContain('estimatedValue');
        expect(fieldNames).toContain('currency');
        expect(fieldNames).toContain('nextActionDate');
        expect(fieldNames).toContain('lostReason');
        expect(fieldNames).toContain('qualificationScore');
    });

    it('should define the dealType schema correctly', () => {
        const type = bundleTypes.find(t => t.slug === 'deal');
        expect(type).toBeDefined();
        expect(type?.name).toBe('Deal');
        expect(type?.schema.length).toBe(10);

        const fieldNames = type?.schema.map(f => f.name);
        expect(fieldNames).toContain('title');
        expect(fieldNames).toContain('leadId');
        expect(fieldNames).toContain('orgId');
        expect(fieldNames).toContain('stage');
        expect(fieldNames).toContain('value');
        expect(fieldNames).toContain('currency');
        expect(fieldNames).toContain('probability');
        expect(fieldNames).toContain('expectedCloseDate');
        expect(fieldNames).toContain('actualCloseDate');
        expect(fieldNames).toContain('lostReason');
    });

    it('should define the interactionType schema correctly', () => {
        const type = bundleTypes.find(t => t.slug === 'interaction');
        expect(type).toBeDefined();
        expect(type?.name).toBe('Interaction');
        expect(type?.schema.length).toBe(5);

        const fieldNames = type?.schema.map(f => f.name);
        expect(fieldNames).toContain('leadId');
        expect(fieldNames).toContain('type');
        expect(fieldNames).toContain('date');
        expect(fieldNames).toContain('notes');
        expect(fieldNames).toContain('outcome');
    });
});
