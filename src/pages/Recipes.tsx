import Head from "next/Head";
import React from "react";
import Header from "../Components/Header/header";
import animate from "../styles/animation/animation.module.css";
import styles from "../styles/pages/Recipes.module.scss";

const Recipes = () => {

    return (
        <>
            <Head>
                <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap" rel="stylesheet" />
            </Head>

            <div className={styles.container}>
                <Header />

                <header>
                    <img src="/img/icons/recipe.png" alt="Receitas" />
                    <h3>Receitas</h3>

                    <div>
                        <input type='text' placeholder="Qual receita você procura?" />
                        <img src="/img/icons/search.png" />
                    </div>
                </header>

                <main>
                    <div className={styles.recipeContainer}>

                        <div className={styles.buttonsContainer}>
                            <div>
                                <button>
                                    <img src="/img/icons/leftArrow.png" alt="Receita anterior" />
                                </button>
                                <p>Anterior</p>
                            </div>

                            <div>
                                <p>
                                    Próxima Receita <br />
                                    Doce
                                </p>
                                <button>
                                    <img src="/img/icons/rightArrow.png" alt="Próxima receita" />
                                </button>
                            </div>
                        </div>

                        <div className={styles.instructions}>

                            <div className={styles.recipeBackground}>
                                <img
                                    src={'/img/backgrounds/purpleLandscape.png'}
                                />
                            </div>


                            <div className={styles.preparationMode}>
                                <h3>Pizza de Pepperoni</h3>

                                <div>
                                    <img src="/img/icons/preparationWhite.png" alt="Modo de Preparo" />
                                    <p>Modo de Preparo</p>
                                </div>

                                <div className={styles.description}>
                                    <p>
                                        Misture o fermento, o sal e o açúcar em um pouco de água morna,
                                        até que o fermento esteja completamente dissolvido.
                                        Em seguida, adicione metade da medida de farinha de trigo,
                                        o óleo e mexa até criar uma consistência pastosa.
                                        Em seguida, adicione metade da medida de farinha de trigo,
                                        o óleo e mexa até criar uma consistência pastosa.
                                    </p>

                                    <p>
                                        Misture o fermento, o sal e o açúcar em um pouco de água morna,
                                        até que o fermento esteja completamente dissolvido.
                                        Em seguida, adicione metade da medida de farinha de trigo,
                                        o óleo e mexa até criar uma consistência pastosa.
                                        Em seguida, adicione metade da medida de farinha de trigo,
                                        o óleo e mexa até criar uma consistência pastosa.
                                    </p>

                                    <p>
                                        Misture o fermento, o sal e o açúcar em um pouco de água morna,
                                        até que o fermento esteja completamente dissolvido.
                                        Em seguida, adicione metade da medida de farinha de trigo,
                                        o óleo e mexa até criar uma consistência pastosa.
                                        Em seguida, adicione metade da medida de farinha de trigo,
                                        o óleo e mexa até criar uma consistência pastosa.
                                    </p>
                                </div>
                            </div>

                            <div className={styles.ingredients}>

                                <div>
                                    <img
                                        className={styles.foodBanner}
                                        src='https://img.itdg.com.br/tdg/images/blog/uploads/2019/05/pizza.jpg?w=1200'
                                        alt='NameHEre'
                                    />
                                </div>


                                <div>
                                    <div className={styles.legend}>
                                        <img src="/img/icons/ingredients.png" alt="Ingredientes" />
                                        <p>Ingredientes:</p>
                                    </div>

                                    <p>
                                        1 kg de farinha de trigo <br />
                                        30 g de fermento biológico <br />
                                        3 xícaras de água morna <br />
                                        3/4 xícaras de óleo <br />
                                        1 colher (chá) de sal <br />
                                        1 colher (chá) de açúcar <br />
                                        1 colher (sopa) de pinga
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={styles.recipeContainer}>

                        <div className={styles.buttonsContainer}>
                            <div>
                                <button>
                                    <img src="/img/icons/leftArrow.png" alt="Receita anterior" />
                                </button>
                                <p>Anterior</p>
                            </div>

                            <div>
                                <p>
                                    Próxima Receita <br />
                                    Doce
                                </p>
                                <button>
                                    <img src="/img/icons/rightArrow.png" alt="Próxima receita" />
                                </button>
                            </div>
                        </div>

                        <div className={styles.instructions}>

                            <div className={styles.recipeBackground}>
                                <img
                                    src={'/img/backgrounds/purpleLandscape.png'}
                                />
                            </div>


                            <div className={styles.preparationMode}>
                                <h3>Pizza de Pepperoni</h3>

                                <div>
                                    <img src="/img/icons/preparationWhite.png" alt="Modo de Preparo" />
                                    <p>Modo de Preparo</p>
                                </div>

                                <div className={styles.description}>
                                    <p>
                                        Misture o fermento, o sal e o açúcar em um pouco de água morna,
                                        até que o fermento esteja completamente dissolvido.
                                        Em seguida, adicione metade da medida de farinha de trigo,
                                        o óleo e mexa até criar uma consistência pastosa.
                                        Em seguida, adicione metade da medida de farinha de trigo,
                                        o óleo e mexa até criar uma consistência pastosa.
                                    </p>

                                    <p>
                                        Misture o fermento, o sal e o açúcar em um pouco de água morna,
                                        até que o fermento esteja completamente dissolvido.
                                        Em seguida, adicione metade da medida de farinha de trigo,
                                        o óleo e mexa até criar uma consistência pastosa.
                                        Em seguida, adicione metade da medida de farinha de trigo,
                                        o óleo e mexa até criar uma consistência pastosa.
                                    </p>

                                    <p>
                                        Misture o fermento, o sal e o açúcar em um pouco de água morna,
                                        até que o fermento esteja completamente dissolvido.
                                        Em seguida, adicione metade da medida de farinha de trigo,
                                        o óleo e mexa até criar uma consistência pastosa.
                                        Em seguida, adicione metade da medida de farinha de trigo,
                                        o óleo e mexa até criar uma consistência pastosa.
                                    </p>
                                </div>
                            </div>

                            <div className={styles.ingredients}>

                                <div>
                                    <img
                                        className={styles.foodBanner}
                                        src='https://img.itdg.com.br/tdg/images/blog/uploads/2019/05/pizza.jpg?w=1200'
                                        alt='NameHEre'
                                    />
                                </div>


                                <div>
                                    <div className={styles.legend}>
                                        <img src="/img/icons/ingredients.png" alt="Ingredientes" />
                                        <p>Ingredientes:</p>
                                    </div>

                                    <p>
                                        1 kg de farinha de trigo <br />
                                        30 g de fermento biológico <br />
                                        3 xícaras de água morna <br />
                                        3/4 xícaras de óleo <br />
                                        1 colher (chá) de sal <br />
                                        1 colher (chá) de açúcar <br />
                                        1 colher (sopa) de pinga
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={styles.recipeContainer}>

                        <div className={styles.buttonsContainer}>
                            <div>
                                <button>
                                    <img src="/img/icons/leftArrow.png" alt="Receita anterior" />
                                </button>
                                <p>Anterior</p>
                            </div>

                            <div>
                                <p>
                                    Próxima Receita <br />
                                    Doce
                                </p>
                                <button>
                                    <img src="/img/icons/rightArrow.png" alt="Próxima receita" />
                                </button>
                            </div>
                        </div>

                        <div className={styles.instructions}>

                            <div className={styles.recipeBackground}>
                                <img
                                    src={'/img/backgrounds/purpleLandscape.png'}
                                />
                            </div>


                            <div className={styles.preparationMode}>
                                <h3>Pizza de Pepperoni</h3>

                                <div>
                                    <img src="/img/icons/preparationWhite.png" alt="Modo de Preparo" />
                                    <p>Modo de Preparo</p>
                                </div>

                                <div className={styles.description}>
                                    <p>
                                        Misture o fermento, o sal e o açúcar em um pouco de água morna,
                                        até que o fermento esteja completamente dissolvido.
                                        Em seguida, adicione metade da medida de farinha de trigo,
                                        o óleo e mexa até criar uma consistência pastosa.
                                        Em seguida, adicione metade da medida de farinha de trigo,
                                        o óleo e mexa até criar uma consistência pastosa.
                                    </p>

                                    <p>
                                        Misture o fermento, o sal e o açúcar em um pouco de água morna,
                                        até que o fermento esteja completamente dissolvido.
                                        Em seguida, adicione metade da medida de farinha de trigo,
                                        o óleo e mexa até criar uma consistência pastosa.
                                        Em seguida, adicione metade da medida de farinha de trigo,
                                        o óleo e mexa até criar uma consistência pastosa.
                                    </p>

                                    <p>
                                        Misture o fermento, o sal e o açúcar em um pouco de água morna,
                                        até que o fermento esteja completamente dissolvido.
                                        Em seguida, adicione metade da medida de farinha de trigo,
                                        o óleo e mexa até criar uma consistência pastosa.
                                        Em seguida, adicione metade da medida de farinha de trigo,
                                        o óleo e mexa até criar uma consistência pastosa.
                                    </p>
                                </div>
                            </div>

                            <div className={styles.ingredients}>

                                <div>
                                    <img
                                        className={styles.foodBanner}
                                        src='https://img.itdg.com.br/tdg/images/blog/uploads/2019/05/pizza.jpg?w=1200'
                                        alt='NameHEre'
                                    />
                                </div>


                                <div>
                                    <div className={styles.legend}>
                                        <img src="/img/icons/ingredients.png" alt="Ingredientes" />
                                        <p>Ingredientes:</p>
                                    </div>

                                    <p>
                                        1 kg de farinha de trigo <br />
                                        30 g de fermento biológico <br />
                                        3 xícaras de água morna <br />
                                        3/4 xícaras de óleo <br />
                                        1 colher (chá) de sal <br />
                                        1 colher (chá) de açúcar <br />
                                        1 colher (sopa) de pinga
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>


                </main>
            </div>
        </>
    );
};

export default Recipes;