window.lunrData = {
  "index": {
    "version": "1.0.0",
    "fields": [
      {
        "name": "longname",
        "boost": 1000
      },
      {
        "name": "name",
        "boost": 500
      },
      {
        "name": "tags",
        "boost": 300
      },
      {
        "name": "kind",
        "boost": 110
      },
      {
        "name": "title",
        "boost": 100
      },
      {
        "name": "summary",
        "boost": 70
      },
      {
        "name": "description",
        "boost": 50
      },
      {
        "name": "body",
        "boost": 1
      }
    ],
    "ref": "id",
    "tokenizer": "default",
    "documentStore": {
      "store": {
        "index.html": [
          "client",
          "index",
          "isomorph",
          "javascript",
          "js",
          "prest",
          "readm"
        ],
        "global.html": [
          "document",
          "global"
        ]
      },
      "length": 2
    },
    "tokenStore": {
      "root": {
        "docs": {},
        "c": {
          "docs": {},
          "l": {
            "docs": {},
            "i": {
              "docs": {},
              "e": {
                "docs": {},
                "n": {
                  "docs": {},
                  "t": {
                    "docs": {
                      "index.html": {
                        "ref": "index.html",
                        "tf": 17.5
                      }
                    }
                  }
                }
              }
            }
          }
        },
        "i": {
          "docs": {},
          "n": {
            "docs": {},
            "d": {
              "docs": {},
              "e": {
                "docs": {},
                "x": {
                  "docs": {
                    "index.html": {
                      "ref": "index.html",
                      "tf": 1300
                    }
                  }
                }
              }
            }
          },
          "s": {
            "docs": {},
            "o": {
              "docs": {},
              "m": {
                "docs": {},
                "o": {
                  "docs": {},
                  "r": {
                    "docs": {},
                    "p": {
                      "docs": {},
                      "h": {
                        "docs": {
                          "index.html": {
                            "ref": "index.html",
                            "tf": 17.5
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        },
        "j": {
          "docs": {},
          "a": {
            "docs": {},
            "v": {
              "docs": {},
              "a": {
                "docs": {},
                "s": {
                  "docs": {},
                  "c": {
                    "docs": {},
                    "r": {
                      "docs": {},
                      "i": {
                        "docs": {},
                        "p": {
                          "docs": {},
                          "t": {
                            "docs": {
                              "index.html": {
                                "ref": "index.html",
                                "tf": 17.5
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          "s": {
            "docs": {
              "index.html": {
                "ref": "index.html",
                "tf": 300
              }
            }
          }
        },
        "p": {
          "docs": {},
          "r": {
            "docs": {},
            "e": {
              "docs": {},
              "s": {
                "docs": {},
                "t": {
                  "docs": {
                    "index.html": {
                      "ref": "index.html",
                      "tf": 317.5
                    }
                  }
                }
              }
            }
          }
        },
        "r": {
          "docs": {},
          "e": {
            "docs": {},
            "a": {
              "docs": {},
              "d": {
                "docs": {},
                "m": {
                  "docs": {
                    "index.html": {
                      "ref": "index.html",
                      "tf": 110
                    }
                  }
                }
              }
            }
          }
        },
        "d": {
          "docs": {},
          "o": {
            "docs": {},
            "c": {
              "docs": {},
              "u": {
                "docs": {},
                "m": {
                  "docs": {},
                  "e": {
                    "docs": {},
                    "n": {
                      "docs": {},
                      "t": {
                        "docs": {
                          "global.html": {
                            "ref": "global.html",
                            "tf": 35
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        },
        "g": {
          "docs": {},
          "l": {
            "docs": {},
            "o": {
              "docs": {},
              "b": {
                "docs": {},
                "a": {
                  "docs": {},
                  "l": {
                    "docs": {
                      "global.html": {
                        "ref": "global.html",
                        "tf": 2045
                      }
                    }
                  }
                }
              }
            }
          }
        }
      },
      "length": 9
    },
    "corpusTokens": [
      "client",
      "document",
      "global",
      "index",
      "isomorph",
      "javascript",
      "js",
      "prest",
      "readm"
    ],
    "pipeline": [
      "trimmer",
      "stopWordFilter",
      "stemmer"
    ]
  },
  "store": {
    "index.html": {
      "id": "index.html",
      "kind": "readme",
      "title": "prest-js",
      "longname": "index",
      "name": "prest-js",
      "tags": "index",
      "summary": "Isomorphic JavaScript client for pREST",
      "description": "",
      "body": ""
    },
    "global.html": {
      "id": "global.html",
      "kind": "global",
      "title": "Globals",
      "longname": "global",
      "name": "Globals",
      "tags": "global",
      "summary": "All documented globals.",
      "description": "",
      "body": ""
    }
  }
};