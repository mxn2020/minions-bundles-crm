"""
Minions Bundle: Crm SDK — Type Schemas
Custom MinionType schemas for Minions Bundle: Crm.
"""

from minions.types import FieldDefinition, FieldValidation, MinionType

class Person(MinionType):
    """A human being"""
    slug = "person"
    icon = "👤"

    fields = [
        FieldDefinition(name="firstName", type="str", label="firstName"),
        FieldDefinition(name="lastName", type="str", label="lastName"),
        FieldDefinition(name="email", type="str", label="email"),
        FieldDefinition(name="phone", type="str", label="phone"),
    ]


class Organization(MinionType):
    """A company or other entity"""
    slug = "organization"
    icon = "🏢"

    fields = [
        FieldDefinition(name="name", type="str", label="name"),
        FieldDefinition(name="website", type="str", label="website"),
        FieldDefinition(name="industry", type="str", label="industry"),
    ]


class Lead(MinionType):
    """A tracked relationship with a potential or existing client"""
    slug = "lead"
    icon = "🎯"

    fields = [
        FieldDefinition(name="source", type="str", label="source"),
        FieldDefinition(name="status", type="str", label="status"),
        FieldDefinition(name="assignedTo", type="str", label="assignedTo"),
        FieldDefinition(name="estimatedValue", type="float", label="estimatedValue"),
        FieldDefinition(name="currency", type="str", label="currency"),
        FieldDefinition(name="nextActionDate", type="str", label="nextActionDate"),
        FieldDefinition(name="lostReason", type="str", label="lostReason"),
        FieldDefinition(name="qualificationScore", type="float", label="qualificationScore"),
    ]


class Deal(MinionType):
    """A concrete commercial opportunity"""
    slug = "deal"
    icon = "💰"

    fields = [
        FieldDefinition(name="title", type="str", label="title"),
        FieldDefinition(name="leadId", type="str", label="leadId"),
        FieldDefinition(name="orgId", type="str", label="orgId"),
        FieldDefinition(name="stage", type="str", label="stage"),
        FieldDefinition(name="value", type="float", label="value"),
        FieldDefinition(name="currency", type="str", label="currency"),
        FieldDefinition(name="probability", type="float", label="probability"),
        FieldDefinition(name="expectedCloseDate", type="str", label="expectedCloseDate"),
        FieldDefinition(name="actualCloseDate", type="str", label="actualCloseDate"),
        FieldDefinition(name="lostReason", type="str", label="lostReason"),
    ]


class Interaction(MinionType):
    """A record of an interaction with a lead"""
    slug = "interaction"
    icon = "💬"

    fields = [
        FieldDefinition(name="leadId", type="str", label="leadId"),
        FieldDefinition(name="type", type="str", label="type"),
        FieldDefinition(name="date", type="str", label="date"),
        FieldDefinition(name="notes", type="str", label="notes"),
        FieldDefinition(name="outcome", type="str", label="outcome"),
    ]


BUNDLE_TYPES = [Person, Organization, Lead, Deal, Interaction]
