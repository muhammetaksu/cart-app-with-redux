import React from 'react';
import Table from 'react-bootstrap/Table';
import './style.css';

const CardDetails = () => {
  return (
    <>
      <div className="container mt-3">
        <h2>Ürün Detay Sayfası</h2>

        <section className="container mt-3">
          <div className="item_details ">
            <div className="items_img ">
              <img
                alt=""
                src="https://www.do-re.com.tr/gibson-les-paul-standard-60s-solak-elektro-gitar-bourbon-burst-ebda9d1023160f7a5492424043ee7d8e-3dfee03ed1860c31ec79f0e3839d5728-large-pp.jpg"
              />
            </div>

            <div className="details ">
              <Table>
                <tr>
                  <td>
                    <p>
                      <strong>Name: </strong> Gibson Les Paul Standard
                    </p>
                    <p>
                      <strong>Fiyat: </strong> 70000 TL
                    </p>
                    <p>
                      <strong>Açıklama: </strong> Solak Elektro
                    </p>
                    <p>
                      <strong>Toplam: </strong> Gibson Les Paul Standard
                    </p>
                  </td>
                  <td>
                    <p>
                      <strong>Sil: </strong>
                      <span>
                        <i
                          className="fas fa-trash "
                          style={{
                            color: 'red',
                            fontSize: 20,
                            cursor: 'pointer',
                          }}
                        ></i>
                      </span>
                    </p>
                  </td>
                </tr>
              </Table>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CardDetails;
