export async function GET() {
  // const res = await fetch('https://data.mongodb-api.com/...', {
  //   headers: {
  //     'Content-Type': 'application/json',
  //     'API-Key': process.env.DATA_API_KEY,
  //   },
  // })
  // const data = await res.json()

  return Response.json({
    metadata: {
      page: 1,
      results: 10,
      from: 1,
      to: 10,
      total_pages: 2,
      total_results: 17,
    },
    links: {
      first:
        "https://camden.bops-staging.services/api/v2/public/planning_applications/search?page=1&maxresults=10",
      last: "https://camden.bops-staging.services/api/v2/public/planning_applications/search?page=2&maxresults=10",
      prev: null,
      next: "https://camden.bops-staging.services/api/v2/public/planning_applications/search?page=2&maxresults=10",
    },
    data: [
      {
        application: {
          type: {
            value: "pp.full.householder",
            description: "planning_permission",
          },
          reference: "24-00129-HAPP",
          fullReference: "CMD-24-00129-HAPP",
          targetDate: "2024-06-06",
          receivedAt: "2024-05-02T16:14:39.305+01:00",
          validAt: "2024-05-02T00:00:00.000+01:00",
          publishedAt: "2024-05-02T00:00:00.000+01:00",
          determinedAt: "2024-05-10T13:38:10.852+01:00",
          decision: "granted",
          status: "determined",
          consultation: {
            startDate: "2024-05-07",
            endDate: "2024-05-07",
            publicUrl:
              "https://camden.bops-applicants-staging.services/planning_applications/2613",
            publishedComments: [
              {
                comment:
                  "Eton Conservation Area Advisory Committee Advice from Eton Conservation Area Advisory Committee: 06.07.2023 Re: 9 Steele’s Road: 2023/2198/P Replacement of existing lower ground floor rear extension; installation of timber French doors at rear; alterations to lower ground floor side fenestration; installation of dormer on rear roof slope; replacement of all windows with timber sash windows to match existing; and associated exterior works. It is the side elevation in this proposal that presents concerns. The new large - very large - side window exposing the stairs is an uncomfortably destabilising presence at the base of this elevation. There is an ill-fitting awkwardness about it, especially as it just manages to squeeze, by a sliver, beneath a newly raised ‘existing' window. It is one of two large presences in this elevation, the other being the proposed extension. Clad in Corten Steel, this extension introduces a markedly forceful presence, which is in some danger of overpowering the main house. It reads, in the drawing, as a defiantly different, almost separate, entity - rather than being in the nature of an addition. However, it is not possible for anyone to give a fully informed and fair judgement when all there is to go on is this drawing (and that of the rear elevation) at this scale. Does Camden agree with this? We would welcome a response to this concern as we have noticed a certain increase in the incidence of drawings submitted with applications that do not provide adequate accounts of a design. We think that a more detailed presentation of the extension, including perhaps CGI’s, is needed, and should be supplied. The new large side window can surely be made more accommodating to its elevation - at present it disregards the scale and patterning of the side wall’s fenestration - and be reduced in size. And the extension requires a further, fuller presentation. Yours sincerely, Eton CAAC",
                receivedAt: "2024-05-03T10:53:27.704+01:00",
                summaryTag: "objection",
              },
              {
                comment: "[redacted]\r\n\r\ndon't redact this comment\r\n\r\n",
                receivedAt: "2024-05-10T13:22:17.969+01:00",
                summaryTag: "objection",
              },
              {
                comment: "light\r\n\r\naccess\r\n\r\n",
                receivedAt: "2024-05-10T13:22:58.884+01:00",
                summaryTag: "neutral",
              },
            ],
            consulteeComments: [
              {
                comment:
                  "Eton Conservation Area Advisory Committee Advice from Eton Conservation Area Advisory Committee: 06.07.2023 Re: 9 Steele’s Road: 2023/2198/P Replacement of existing lower ground floor rear extension; installation of timber French doors at rear; alterations to lower ground floor side fenestration; installation of dormer on rear roof slope; replacement of all windows with timber sash windows to match existing; and associated exterior works. It is the side elevation in this proposal that presents concerns. The new large - very large - side window exposing the stairs is an uncomfortably destabilising presence at the base of this elevation. There is an ill-fitting awkwardness about it, especially as it just manages to squeeze, by a sliver, beneath a newly raised ‘existing' window. It is one of two large presences in this elevation, the other being the proposed extension. Clad in Corten Steel, this extension introduces a markedly forceful presence, which is in some danger of overpowering the main house. It reads, in the drawing, as a defiantly different, almost separate, entity - rather than being in the nature of an addition. However, it is not possible for anyone to give a fully informed and fair judgement when all there is to go on is this drawing (and that of the rear elevation) at this scale. Does Camden agree with this? We would welcome a response to this concern as we have noticed a certain increase in the incidence of drawings submitted with applications that do not provide adequate accounts of a design. We think that a more detailed presentation of the extension, including perhaps CGI’s, is needed, and should be supplied. The new large side window can surely be made more accommodating to its elevation - at present it disregards the scale and patterning of the side wall’s fenestration - and be reduced in size. And the extension requires a further, fuller presentation. Yours sincerely, Eton CAAC",
                receivedAt: "2024-05-03T00:00:00.000+01:00",
              },
            ],
          },
        },
        property: {
          address: {
            latitude: "51.5453389",
            longitude: "-0.1594861",
            title: "9, STEELE'S ROAD",
            singleLine: "9, STEELE'S ROAD, LONDON, NW3 4SE",
            uprn: "000005049507",
            town: "LONDON",
            postcode: "NW3 4SE",
          },
          boundary: {
            site: {
              type: "Feature",
              geometry: {
                type: "MultiPolygon",
                coordinates: [
                  [
                    [
                      [-0.159706, 51.545376],
                      [-0.159223, 51.545115],
                      [-0.15913, 51.54518],
                      [-0.159612, 51.545443],
                      [-0.159706, 51.545376],
                    ],
                  ],
                ],
              },
              properties: {
                name: "",
                entity: 12000509759,
                prefix: "title-boundary",
                dataset: "title-boundary",
                "end-date": "",
                typology: "geography",
                reference: "49074380",
                "entry-date": "2023-12-12",
                "start-date": "2010-12-08",
                planx_user_action: "Accepted the title boundary",
                "organisation-entity": "13",
              },
            },
          },
        },
        proposal: {
          description:
            "Replacement of existing lower ground floor rear extension; installation of timber French doors at rear; alterations to lower ground floor side fenestration; installation of dormer on rear roof slope.",
        },
        applicant: {
          type: "individual",
          address: {
            sameAsSiteAddress: true,
          },
          ownership: {
            owners: [],
            certificate: "a",
            noticeGiven: false,
          },
          agent: {
            address: {
              town: "London",
              line1: "5 Pancras Square",
              line2: "",
              county: "",
              country: "",
              postcode: "N1C 4AG",
            },
          },
        },
      },
      {
        application: {
          type: {
            value: "pa.part1.classA",
            description: "prior_approval",
          },
          reference: "24-00128-PA1A",
          fullReference: "CMD-24-00128-PA1A",
          targetDate: "2024-05-30",
          receivedAt: "2024-04-25T15:51:42.055+01:00",
          validAt: "2024-04-25T00:00:00.000+01:00",
          publishedAt: "2024-04-25T00:00:00.000+01:00",
          determinedAt: null,
          decision: null,
          status: "in_assessment",
          consultation: {
            startDate: "2024-04-26",
            endDate: "2024-05-17",
            publicUrl:
              "https://camden.bops-applicants-staging.services/planning_applications/2608",
            publishedComments: [
              {
                comment: "love it",
                receivedAt: "2024-04-25T16:07:37.468+01:00",
                summaryTag: "supportive",
              },
              {
                comment: "i like light\r\n\r\ni dont have access",
                receivedAt: "2024-04-25T16:06:58.412+01:00",
                summaryTag: "objection",
              },
              {
                comment: "light",
                receivedAt: "2024-04-25T16:09:30.142+01:00",
                summaryTag: "neutral",
              },
            ],
            consulteeComments: [],
          },
        },
        property: {
          address: {
            latitude: "51.533826",
            longitude: "-0.1263839",
            title: "5, PANCRAS SQUARE",
            singleLine: "5, PANCRAS SQUARE, LONDON, N1C 4AG",
            uprn: "000005170230",
            town: "LONDON",
            postcode: "N1C 4AG",
          },
          boundary: {
            site: {
              type: "Feature",
              geometry: {
                type: "Polygon",
                coordinates: [
                  [
                    [-0.12685909867286713, 51.53386742058888],
                    [-0.12680545449256933, 51.5338832710824],
                    [-0.12684836983680758, 51.53393749641327],
                    [-0.1265640556812292, 51.534023422574506],
                    [-0.1264607906341559, 51.53387659719107],
                    [-0.12671694159507793, 51.53376814631963],
                    [-0.12676924467086834, 51.53375229578603],
                    [-0.12685909867286713, 51.53386742058888],
                  ],
                ],
              },
              properties: null,
            },
          },
        },
        proposal: {
          description: "6m extension",
        },
        applicant: {
          type: "individual",
          address: {
            sameAsSiteAddress: true,
          },
          ownership: null,
          agent: {
            address: null,
          },
        },
      },
      {
        application: {
          type: {
            value: "ldc.proposed",
            description: "lawfulness_certificate",
          },
          reference: "23-00117-LDCP",
          fullReference: "CMD-23-00117-LDCP",
          targetDate: "2023-09-20",
          receivedAt: "2023-08-16T11:35:54.354+01:00",
          validAt: "2023-08-16T00:00:00.000+01:00",
          publishedAt: "2023-08-16T00:00:00.000+01:00",
          determinedAt: "2023-08-16T12:58:25.556+01:00",
          decision: "granted",
          status: "determined",
        },
        property: {
          address: {
            latitude: "527662",
            longitude: "184442",
            title: "3 Fellows Road",
            singleLine: "3 Fellows Road, London, NW3 3LR",
            uprn: "100081043511",
            town: "London",
            postcode: "NW3 3LR",
          },
          boundary: {
            site: {
              type: "Feature",
              geometry: {
                type: "Polygon",
                coordinates: [
                  [
                    [-0.07716178894042969, 51.50094238217541],
                    [-0.07645905017852783, 51.50053497847238],
                    [-0.07615327835083008, 51.50115276135022],
                    [-0.07716178894042969, 51.50094238217541],
                  ],
                ],
              },
            },
          },
        },
        proposal: {
          description: "Erection of pool and outbuilding in the rear garden",
        },
        applicant: {
          type: null,
          address: null,
          ownership: null,
          agent: {
            address: null,
          },
        },
      },
      {
        application: {
          type: {
            value: "pa.part1.classA",
            description: "prior_approval",
          },
          reference: "23-00112-PA1A",
          fullReference: "CMD-23-00112-PA1A",
          targetDate: "2023-09-12",
          receivedAt: "2023-08-08T13:33:41.265+01:00",
          validAt: "2023-08-08T00:00:00.000+01:00",
          publishedAt: "2023-08-08T00:00:00.000+01:00",
          determinedAt: "2024-06-12T17:57:10.534+01:00",
          decision: "granted",
          status: "determined",
          consultation: {
            startDate: "2023-08-09",
            endDate: "2023-08-30",
            publicUrl:
              "https://camden.bops-applicants-staging.services/planning_applications/2032",
            publishedComments: [
              {
                comment: "Test Test ",
                receivedAt: "2023-06-11T00:00:00.000+01:00",
                summaryTag: "objection",
              },
            ],
            consulteeComments: [],
          },
        },
        property: {
          address: {
            latitude: "51.4842536",
            longitude: "-0.0764165",
            title: "11 Abbey Gardens",
            singleLine: "11 Abbey Gardens, London, SE16 3RQ",
            uprn: "100081043511",
            town: "London",
            postcode: "SE16 3RQ",
          },
          boundary: {
            site: {
              type: "Feature",
              geometry: {
                type: "Polygon",
                coordinates: [
                  [
                    [-0.07716178894042969, 51.50094238217541],
                    [-0.07645905017852783, 51.50053497847238],
                    [-0.07615327835083008, 51.50115276135022],
                    [-0.07716178894042969, 51.50094238217541],
                  ],
                ],
              },
            },
          },
        },
        proposal: {
          description: "Add a rear extension",
        },
        applicant: {
          type: null,
          address: null,
          ownership: null,
          agent: {
            address: null,
          },
        },
      },
      {
        application: {
          type: {
            value: "pa.part1.classA",
            description: "prior_approval",
          },
          reference: "23-00111-PA1A",
          fullReference: "CMD-23-00111-PA1A",
          targetDate: "2023-09-12",
          receivedAt: "2023-08-08T13:32:55.842+01:00",
          validAt: "2023-08-08T00:00:00.000+01:00",
          publishedAt: "2023-08-08T00:00:00.000+01:00",
          determinedAt: null,
          decision: null,
          status: "in_assessment",
          consultation: {
            startDate: "2023-08-09",
            endDate: "2023-08-30",
            publicUrl:
              "https://camden.bops-applicants-staging.services/planning_applications/2031",
            publishedComments: [],
            consulteeComments: [],
          },
        },
        property: {
          address: {
            latitude: "51.4842536",
            longitude: "-0.0764165",
            title: "11 Abbey Gardens",
            singleLine: "11 Abbey Gardens, London, SE16 3RQ",
            uprn: "100081043511",
            town: "London",
            postcode: "SE16 3RQ",
          },
          boundary: {
            site: {
              type: "Feature",
              geometry: {
                type: "Polygon",
                coordinates: [
                  [
                    [-0.07716178894042969, 51.50094238217541],
                    [-0.07645905017852783, 51.50053497847238],
                    [-0.07615327835083008, 51.50115276135022],
                    [-0.07716178894042969, 51.50094238217541],
                  ],
                ],
              },
            },
          },
        },
        proposal: {
          description: "Add a rear extension",
        },
        applicant: {
          type: null,
          address: null,
          ownership: null,
          agent: {
            address: null,
          },
        },
      },
      {
        application: {
          type: {
            value: "pa.part1.classA",
            description: "prior_approval",
          },
          reference: "23-00110-PA1A",
          fullReference: "CMD-23-00110-PA1A",
          targetDate: "2023-09-01",
          receivedAt: "2023-07-28T11:25:10.815+01:00",
          validAt: "2023-07-28T00:00:00.000+01:00",
          publishedAt: "2023-07-28T00:00:00.000+01:00",
          determinedAt: "2024-06-12T18:03:00.600+01:00",
          decision: "refused",
          status: "determined",
          consultation: {
            startDate: "2023-07-31",
            endDate: "2023-08-21",
            publicUrl:
              "https://camden.bops-applicants-staging.services/planning_applications/2010",
            publishedComments: [
              {
                comment: "test",
                receivedAt: "2023-01-01T00:00:00.000+00:00",
                summaryTag: "supportive",
              },
            ],
            consulteeComments: [],
          },
        },
        property: {
          address: {
            latitude: "51.4842536",
            longitude: "-0.0764165",
            title: "Test address 02",
            singleLine: "Test address 02, London, NW3 3EP",
            uprn: "100081043511",
            town: "London",
            postcode: "NW3 3EP",
          },
          boundary: {
            site: {
              type: "Feature",
              geometry: {
                type: "Polygon",
                coordinates: [
                  [
                    [-0.07716178894042969, 51.50094238217541],
                    [-0.07645905017852783, 51.50053497847238],
                    [-0.07615327835083008, 51.50115276135022],
                    [-0.07716178894042969, 51.50094238217541],
                  ],
                ],
              },
            },
          },
        },
        proposal: {
          description: "Add a rear extension",
        },
        applicant: {
          type: null,
          address: null,
          ownership: null,
          agent: {
            address: null,
          },
        },
      },
      {
        application: {
          type: {
            value: "pa.part1.classA",
            description: "prior_approval",
          },
          reference: "23-00109-PA1A",
          fullReference: "CMD-23-00109-PA1A",
          targetDate: "2023-09-01",
          receivedAt: "2023-07-28T11:24:14.825+01:00",
          validAt: "2023-07-28T00:00:00.000+01:00",
          publishedAt: "2023-07-28T00:00:00.000+01:00",
          determinedAt: "2023-08-01T13:27:30.118+01:00",
          decision: "refused",
          status: "determined",
          consultation: {
            startDate: "2023-07-31",
            endDate: "2023-08-21",
            publicUrl:
              "https://camden.bops-applicants-staging.services/planning_applications/2009",
            publishedComments: [],
            consulteeComments: [],
          },
        },
        property: {
          address: {
            latitude: "51.4842536",
            longitude: "-0.0764165",
            title: "Test address",
            singleLine: "Test address, London, NW3 3EP",
            uprn: "100081043511",
            town: "London",
            postcode: "NW3 3EP",
          },
          boundary: {
            site: {
              type: "Feature",
              geometry: {
                type: "Polygon",
                coordinates: [
                  [
                    [-0.07716178894042969, 51.50094238217541],
                    [-0.07645905017852783, 51.50053497847238],
                    [-0.07615327835083008, 51.50115276135022],
                    [-0.07716178894042969, 51.50094238217541],
                  ],
                ],
              },
            },
          },
        },
        proposal: {
          description: "Add a rear extension",
        },
        applicant: {
          type: null,
          address: null,
          ownership: null,
          agent: {
            address: null,
          },
        },
      },
      {
        application: {
          type: {
            value: "ldc.proposed",
            description: "lawfulness_certificate",
          },
          reference: "23-00108-LDCP",
          fullReference: "CMD-23-00108-LDCP",
          targetDate: "2023-09-01",
          receivedAt: "2023-07-28T11:20:15.274+01:00",
          validAt: "2023-07-28T00:00:00.000+01:00",
          publishedAt: "2023-07-28T00:00:00.000+01:00",
          determinedAt: null,
          decision: null,
          status: "in_assessment",
        },
        property: {
          address: {
            latitude: "51.4842536",
            longitude: "-0.0764165",
            title: "43 Eton Avenue",
            singleLine: "43 Eton Avenue, London, NW3 3EP",
            uprn: "100081043511",
            town: "London",
            postcode: "NW3 3EP",
          },
          boundary: {
            site: {
              type: "Feature",
              geometry: {
                type: "Polygon",
                coordinates: [
                  [
                    [-0.07716178894042969, 51.50094238217541],
                    [-0.07645905017852783, 51.50053497847238],
                    [-0.07615327835083008, 51.50115276135022],
                    [-0.07716178894042969, 51.50094238217541],
                  ],
                ],
              },
            },
          },
        },
        proposal: {
          description: "Add a chimney stack",
        },
        applicant: {
          type: null,
          address: null,
          ownership: null,
          agent: {
            address: null,
          },
        },
      },
      {
        application: {
          type: {
            value: "pa.part1.classA",
            description: "prior_approval",
          },
          reference: "23-00107-PA1A",
          fullReference: "CMD-23-00107-PA1A",
          targetDate: "2023-09-01",
          receivedAt: "2023-07-28T11:16:44.688+01:00",
          validAt: "2023-07-28T00:00:00.000+01:00",
          publishedAt: "2023-07-28T00:00:00.000+01:00",
          determinedAt: "2023-08-01T15:26:23.160+01:00",
          decision: "granted",
          status: "determined",
          consultation: {
            startDate: "2023-07-31",
            endDate: "2023-08-21",
            publicUrl:
              "https://camden.bops-applicants-staging.services/planning_applications/2007",
            publishedComments: [
              {
                comment: "test",
                receivedAt: "2023-01-01T00:00:00.000+00:00",
                summaryTag: "objection",
              },
            ],
            consulteeComments: [],
          },
        },
        property: {
          address: {
            latitude: "51.4842536",
            longitude: "-0.0764165",
            title: "11 Abbey Gardens",
            singleLine: "11 Abbey Gardens, London, SE16 3RQ",
            uprn: "100081043511",
            town: "London",
            postcode: "SE16 3RQ",
          },
          boundary: {
            site: {
              type: "Feature",
              geometry: {
                type: "Polygon",
                coordinates: [
                  [
                    [-0.07716178894042969, 51.50094238217541],
                    [-0.07645905017852783, 51.50053497847238],
                    [-0.07615327835083008, 51.50115276135022],
                    [-0.07716178894042969, 51.50094238217541],
                  ],
                ],
              },
            },
          },
        },
        proposal: {
          description: "Add a rear extension",
        },
        applicant: {
          type: null,
          address: null,
          ownership: null,
          agent: {
            address: null,
          },
        },
      },
      {
        application: {
          type: {
            value: "pa.part1.classA",
            description: "prior_approval",
          },
          reference: "23-00103-PA1A",
          fullReference: "CMD-23-00103-PA1A",
          targetDate: "2023-08-25",
          receivedAt: "2023-07-21T10:20:33.978+01:00",
          validAt: "2023-07-21T00:00:00.000+01:00",
          publishedAt: "2023-07-21T00:00:00.000+01:00",
          determinedAt: null,
          decision: null,
          status: "in_assessment",
          consultation: {
            startDate: "2023-07-24",
            endDate: "2023-08-14",
            publicUrl:
              "https://camden.bops-applicants-staging.services/planning_applications/1995",
            publishedComments: [
              {
                comment: "xxx",
                receivedAt: "2023-01-01T00:00:00.000+00:00",
                summaryTag: "objection",
              },
              {
                comment:
                  "helloodhkshfhsdlkdfhlffk\r\nsfhdkjfhfkdlfhlsdfklsdhfld\r\nsfhsdkfhlhkhfld",
                receivedAt: "2023-06-22T00:00:00.000+01:00",
                summaryTag: "objection",
              },
            ],
            consulteeComments: [],
          },
        },
        property: {
          address: {
            latitude: "51.4842536",
            longitude: "-0.0764165",
            title: "11 Abbey Gardens",
            singleLine: "11 Abbey Gardens, London, SE16 3RQ",
            uprn: "100081043511",
            town: "London",
            postcode: "SE16 3RQ",
          },
          boundary: {
            site: {
              type: "Feature",
              geometry: {
                type: "Polygon",
                coordinates: [
                  [
                    [-0.07716178894042969, 51.50094238217541],
                    [-0.07645905017852783, 51.50053497847238],
                    [-0.07615327835083008, 51.50115276135022],
                    [-0.07716178894042969, 51.50094238217541],
                  ],
                ],
              },
            },
          },
        },
        proposal: {
          description: "Add a rear extension",
        },
        applicant: {
          type: null,
          address: null,
          ownership: null,
          agent: {
            address: null,
          },
        },
      },
    ],
  });
}
