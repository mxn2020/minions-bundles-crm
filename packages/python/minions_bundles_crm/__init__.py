"""
Minions Bundle: Crm Python SDK

CRM pipeline bundle — leads, deals, interactions, sequences
"""

__version__ = "0.1.0"


def create_client(**kwargs):
    """Create a client for Minions Bundle: Crm.

    Args:
        **kwargs: Configuration options.

    Returns:
        dict: Client configuration.
    """
    return {
        "version": __version__,
        **kwargs,
    }

from .schemas import *
